/**
 @module FreeAgentClient

 This module presents a higher-level API for interacting with resources
 in the FreeAgent Network GrahQL API.
 */

// Dependencies
var oauth2 = require('simple-oauth2');
var get = require('lodash/get');
var { GraphQLClient } = require('graphql-request');
var { ADD_DEAL } = require('./graphql/deals');
var { ADD_LEAD } = require('./graphql/leads');
var { GET_SALES_STAGES } = require('./graphql/teams');
var { ADD_CHANNEL_CONTACT } = require('./graphql/channels');


/**
 The FreeAgent GraphQL API client
 @constructor
 @param {object} options - config for the GraphQL client
 */

function FreeAgentClient(options = {}) {
  this.credentials = {
    client: {
      id: options.clientId,
      secret: options.clientSecret,
    },
    auth: {
      tokenHost: options.oauthURL,
    },
  };
  this.accessToken = null;
  this.oauthURL = options.oauthURL;
  this.graphQLEndpoint = options.graphQLEndpoint;
};

FreeAgentClient.prototype.graphqlRequest =  function (query, variables) {
  const client = new GraphQLClient(this.graphQLEndpoint, {
    headers: {
      Authorization: `Bearer ${this.accessToken.access_token}`,
    },
  });
  return client.request(query, variables);
}

FreeAgentClient.prototype.getAccessToken = function () {
  var that = this;
  return new Promise(function(resolve, reject) {
    if (that.accessToken) return resolve(that.accessToken);
    const client = oauth2.create(that.credentials);
    const tokenConfig = {};
    client.clientCredentials.getToken(tokenConfig, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const faToken = client.accessToken.create(result);
        that.accessToken = faToken.token;
        resolve(that.accessToken);
      }
    });
  });
};

FreeAgentClient.prototype.addDeal = function (deal) {
  var that = this;
  return new Promise(function(resolve, reject) {
    that.getAccessToken().then((token) => {
      that.graphqlRequest(ADD_DEAL, deal).then((createdDeal) => {
        resolve(get(createdDeal,'addDeal',null));
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

FreeAgentClient.prototype.addLead = function (lead) {
  var that = this;
  return new Promise(function(resolve, reject) {
    that.getAccessToken().then((token) => {
      that.graphqlRequest(ADD_LEAD, lead).then((createdLead) => {
        resolve(get(createdLead,'addLead',null));
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

FreeAgentClient.prototype.addLeadToChannel = function (params) {
  var that = this;
  return new Promise(function(resolve, reject) {
    that.getAccessToken().then((token) => {
      that.graphqlRequest(ADD_CHANNEL_CONTACT, params).then((response) => {
        resolve(get(response,'addContactToChannel',null));
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

FreeAgentClient.prototype.getSalesStages = function () {
  var that = this;
  return new Promise(function(resolve, reject) {
    that.getAccessToken().then((token) => {
      that.graphqlRequest(GET_SALES_STAGES).then((salesStages) => {
        resolve(get(salesStages,'getSalesStages',null));
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

module.exports = FreeAgentClient;
