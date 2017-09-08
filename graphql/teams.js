var { SALES_STAGE_BODY } = require('./bodies');

const GET_SALES_STAGES = `
  query getSalesStages{
    getSalesStages{
      sales_stages{
        ${SALES_STAGE_BODY}
      }
      error
    }
  }
`;

module.exports = {
  GET_SALES_STAGES: GET_SALES_STAGES,
};
