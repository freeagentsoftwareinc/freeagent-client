var async = require('async');
var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
var FreeAgentClient = require('../index');

describe('#freeagent-client', function () {

  var freeagent = new FreeAgentClient({
    clientId: '',
    clientSecret: '',
    oauthURL: '',
    graphQLEndpoint: '',
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
      assert(salesStages != null, "Sale stages should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });

  it('Create deal', function (done) {
    const deal = {
      name: 'Freeagent Library Test',
      logoname: 'Freeagent Library Test',
      sales_stage_id: '',
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
      last_name: 'Client Library3',
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

  it('Save lead', function (done) {
    const lead = {
      "id": "",
      "first_name": "",
      "last_name": "",
      "buying_power": null,
      "buying_center_id": null,
      "current_position": "",
      "logo_id": "",
      "logo_name": "",
      "location_id": null,
      "location_name": null,
      "work_phone": "",
      "home_phone": "",
      "mobile_phone": "",
      "personal_email": "",
      "work_email": "",
      "alternate_email_1": "",
      "alternate_phone_1": "",
      "home_address": "",
      "work_address": "",
      "linkedIn": "",
      "facebook": "",
      "twitter": "",
      "lead_status_id": "",
      "lead_source_id": null,
      "lead_owner_id": "",
      "lead_score": null,
      "custom_fields": []
    };
    freeagent.saveLead(lead).then((savedLead) => {
      assert(savedLead != null, "Lead should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });

  it('Search leads', function (done) {
    const options = {
      pattern: '',
      limit: 10,
    };
    freeagent.searchLeads(options).then((leads) => {
      assert(leads != null, "List of leads should exists.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });

  it('Add lead to deal', function (done) {
    const params = {
      channel_id: '95dc044c-99fd-4554-a415-4a94e78f91dc',
      contact_id: 'bbb22969-877f-4594-90b8-5709b8d17b1f',
    };
    freeagent.addLeadToChannel(params).then((response) => {
      assert(response != null, "Lead - Channel relationship should exist.");
      return done();
    }).catch(error => {
      if (error) return done(error);
    });
  });
});
