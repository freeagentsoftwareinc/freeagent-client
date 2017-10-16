var async = require('async');
var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
var FreeAgentClient = require('../index');

describe('#freeagent-client', function () {

  var freeagent = new FreeAgentClient({
    clientId: 'your-client-id',
    clientSecret: 'your-secret-id',
    oauthURL: 'freeagent-network-oauth-url',
    graphQLEndpoint: 'freeagent-network-graphql-url',
  });

  it('Get access token', function (done) {
    freeagent.getAccessToken().then((token) => {
      assert(token != null, "Token should exist.");
      return done();
    }).catch((error) => {
      if (error) return done(error);
    });
  });

  it('Get sales stages', function (done) {
    freeagent.getSalesStages().then((salesStages) => {
      assert(salesStages != null, "Lead should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });

  it('Create deal', function (done) {
    const deal = {
      name: 'Freeagent Library Test',
      logoname: 'Freeagent Library Test',
      sales_stage_id: '4192f66d-4132-45e7-9d4f-7df875965a85',
    };
    freeagent.addDeal(deal).then((createdDeal) => {
      assert(createdDeal != null, "Deal should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });

  it('Create lead', function (done) {
    const lead = {
      first_name: 'Freeagent',
      last_name: 'Client Library',
      current_position: 'Tester',
      logo_name: 'Freeagent Library Test',
    };
    freeagent.addLead(lead).then((createdLead) => {
      assert(createdLead != null, "Lead should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });

  it('Add lead to deal', function (done) {
    const params = {
      channel_id: 'f01d85e6-0ada-4ec3-a6d2-1c566944106e',
      contact_id: 'd6f41333-f3e2-4f15-bda9-39cfea31d21a',
    };
    freeagent.addLeadToChannel(params).then((response) => {
      assert(response != null, "Lead - Channel relationship should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });
});
