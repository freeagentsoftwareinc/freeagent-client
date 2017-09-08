var { CHANNEL_CONTACT_BODY } = require('./bodies');

const ADD_CHANNEL_CONTACT = `
  mutation addContactToChannel(
    $channel_id: String!,
    $contact_id: String!,
  ) {
      addContactToChannel(
        channel_id: $channel_id,
        contact_id: $contact_id,
      ){
        contact {
          ${CHANNEL_CONTACT_BODY}
        }
        error
      }
    }
`;

module.exports = {
  ADD_CHANNEL_CONTACT: ADD_CHANNEL_CONTACT,
};
