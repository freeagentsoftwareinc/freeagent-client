var { LEAD_BODY } = require('./bodies');

const SEARCH_LEADS = `
  query searchContacts(
    $pattern: String,
    $limit: String
  ){
    searchContacts(
      pattern: $pattern,
      limit: $limit
    ) {
      ${LEAD_BODY}
    }
  }
`;

const ADD_LEAD = `
  mutation addLead(
    $first_name: String,
    $last_name: String,
    $current_position: String,
    $logo_id: String,
    $logo_name: String,
    $location_id: String,
    $location_name: String,
    $work_phone: String,
    $home_phone: String,
    $mobile_phone: String,
    $personal_email: String,
    $work_email: String,
    $alternate_email_1: String,
    $alternate_phone_1: String,
    $home_address: String,
    $work_address: String,
    $linkedIn: String,
    $facebook: String,
    $twitter: String,
    $lead_score: Int,
    $lead_status_id: String,
    $lead_source_id: String,
    $lead_owner_id: String,
    $channelId: String,
    $custom_fields: [[String]]) {
      addLead(
        first_name: $first_name,
        last_name: $last_name,
        current_position: $current_position,
        logo_id: $logo_id,
        logo_name: $logo_name,
        location_id: $location_id,
        location_name: $location_name,
        work_phone: $work_phone,
        home_phone: $home_phone,
        mobile_phone: $mobile_phone,
        personal_email: $personal_email,
        work_email: $work_email,
        alternate_email_1: $alternate_email_1,
        alternate_phone_1: $alternate_phone_1,
        home_address: $home_address,
        work_address: $work_address,
        linkedIn: $linkedIn,
        facebook: $facebook,
        twitter: $twitter,
        lead_score: $lead_score,
        lead_status_id: $lead_status_id,
        lead_source_id: $lead_source_id,
        lead_owner_id: $lead_owner_id,
        channelId: $channelId,
        custom_fields: $custom_fields
      ) {
        lead{${LEAD_BODY}}
      }
    }
`;

const SAVE_LEAD = `
mutation updateLead(
  $id: String!,
  $first_name: String,
  $last_name: String,
  $buying_power: Int,
  $buying_center_id: String,
  $current_position: String,
  $logo_id: String,
  $logo_name: String,
  $location_id: String,
  $location_name: String,
  $work_phone: String,
  $home_phone: String,
  $mobile_phone: String,
  $personal_email: String,
  $work_email: String,
  $alternate_email_1: String,
  $alternate_phone_1: String,
  $home_address: String,
  $work_address: String,
  $linkedIn: String,
  $facebook: String,
  $twitter: String,
  $lead_status_id: String,
  $lead_source_id: String,
  $lead_owner_id: String,
  $lead_score: Int,
  $custom_fields: [[String]]) {
  updateLead(
    id: $id,
    first_name: $first_name,
    buying_power: $buying_power,
    buying_center_id: $buying_center_id,
    last_name: $last_name,
    current_position: $current_position,
    logo_id: $logo_id,
    logo_name: $logo_name,
    location_id: $location_id,
    location_name: $location_name,
    work_phone: $work_phone,
    home_phone: $home_phone,
    mobile_phone: $mobile_phone,
    personal_email: $personal_email,
    work_email: $work_email,
    alternate_email_1: $alternate_email_1,
    alternate_phone_1: $alternate_phone_1,
    home_address: $home_address,
    work_address: $work_address,
    linkedIn: $linkedIn,
    facebook: $facebook,
    twitter: $twitter,
    lead_status_id: $lead_status_id,
    lead_source_id: $lead_source_id,
    lead_owner_id: $lead_owner_id,
    lead_score: $lead_score,
    custom_fields: $custom_fields) {
      lead{${LEAD_BODY}}
      error
  }
}
`;

module.exports = {
  ADD_LEAD: ADD_LEAD,
  SEARCH_LEADS: SEARCH_LEADS,
  SAVE_LEAD: SAVE_LEAD,
};
