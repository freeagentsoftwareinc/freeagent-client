var { DEAL_BODY_LIST } = require('./bodies');

const ADD_DEAL = `
  mutation addDeal(
    $name: String,
    $logoname: String!,
    $logo_id: String,
    $location_place_id: String,
    $amount: Float,
    $location_name: String,
    $forecast_category_id: String,
    $contactId: String,
    $win_probability: Int,
    $close_date: Date,
    $sales_stage_id: String,
    $type_id: String,
    $lead_source_id: String,
  ){
    addDeal(name: $name,
      amount: $amount,
      location_name: $location_name,
      location_place_id: $location_place_id
      logoname: $logoname,
      logo_id: $logo_id,
      forecast_category_id: $forecast_category_id,
      contactId: $contactId,
      win_probability: $win_probability,
      close_date: $close_date,
      sales_stage_id: $sales_stage_id,
      type_id: $type_id,
      lead_source_id: $lead_source_id,
    ) {
      ${DEAL_BODY_LIST}
    }
  }
`;

module.exports = {
  ADD_DEAL: ADD_DEAL,
};
