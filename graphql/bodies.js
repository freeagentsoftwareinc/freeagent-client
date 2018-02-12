/* ***** ATOMIC BODIES ***** */
const GENERIC_MIN = `
__typename
id
`;

const SUCCESS_BODY = `
__typename
success
`;

const SUCCESS_ERROR_BODY = `
  ${SUCCESS_BODY}
  error
`;

const LOGO_BODY_MIN = `
__typename
id
name
logo_src
`;

const AGENT_BODY_MIN = `
__typename
id
first_name
last_name
full_name
portrait_url
presence
teamId
email_address
company,
sales_role,
generated_password
`;

const ENTITY_STEP_BODY = `
__typename
id
title
description
completed
icon
action
options
type
notificationClosed
`;

const EVENT_MIN_BODY = `
__typename
id
source
source_event_id
title
description
notes
start_time
end_time
location_name
recurring_rule
recurring_object
`;

const AGENT_OWN_BODY_MIN = `
__typename
id
first_name
last_name
full_name
portrait_url
email_address
isAdmin
status
`;

const VIEW_BODY = `
id
__typename
name
entity
value
default
scope
agent {
  ${AGENT_BODY_MIN}
}
`;

const REPORT_BODY = `
id
__typename
name
chart
view_id
value
created_at
scope
agent {
  ${AGENT_BODY_MIN}
}
`;

const VIEW_DEFAULT_BODY = `
id
__typename
default_view_id
ui_state
entity
`;

const ASSIGN_AGENT_BODY = `
  error
  assignedDeals
`;
const EXPORT_CSV_BODY = `
  sucess
  code
  error
`;
const CUSTOM_FIELD_VALUE = `
  field_name
  value
  data_type
`;

const CATALOG_BODY_BASE = `
  name
  id
  type
  catalog_type_id
  custom_field_id
  order
`;

const CATALOG_BODY = `
elements{
  ${CATALOG_BODY_BASE}
}
error
`;
const G2K_RANKINGS_BODY = `
__typename
ranking
sales
profits
assets
market_value
year
`;
const LOCATION_BODY = `
__typename
id
place_id
display_name
formatted_address
`;

const BUILD_INFO_BODY = `
buildTag
buildTime
`;

const PRESENCE_BODY = `
id
__typename
presence
`;

const EMAIL_ACCOUNT_BODY = `
__typename
error
accounts {
  __typename
  id
  source
  email_address
  email_enable
}
`;

const SYNC_HISTORY_BODY = `
__typename
id
process_id
total_items
processed_items
status
updated_at
fa_updated
fa_created
`;

const CONTACTS_SUMMARY_BODY = `
__typename
total_contacts
top_logos
buying_centers
buying_power_zero
buying_power_one
buying_power_two
buying_power_three
phones
emails
`;

const INDUSTRY_COUNT_BODY = `
__typename
name
count
`;

const BUYING_CENTER_COUNT_BODY = `
__typename
name
count
`;

const ATTACHMENT_BODY = `
id
__typename
file_name
file_description
code
extension
mime_type
`;

const INVITATION_BODY = `
id
__typename
status
email
`;

const PHONE_NUMBER_BODY = `
__typename
id
number
region_code
type
verification_status
validation_code
`;

const CHANNEL_AGENT_BODY = `
id
__typename
agent_id
channel_id
unread_count
`;
const CONTACT_BODY_SHORT = `
id,
__typename,
first_name,
last_name,
full_name,
current_position,
percent_completed,
buying_power,
buying_center,
percent_completed,
portrait_url,
mobile_phone,
home_phone,
work_phone,
personal_email,
work_email,
alternate_email_1,
alternate_phone_1,
`;
const LEAD_BODY_SHORT = `
id
__typename
first_name
last_name
full_name
current_position
buying_power
buying_center
buying_center_id
portrait_url
mobile_phone
home_phone
work_phone
personal_email
work_email
alternate_email_1
alternate_phone_1
location_name
home_address
work_address
alternate_address_1
linkedIn
facebook
twitter
lead_status
lead_source
lead_score
owner_id
created_at
updated_at
attempts
last_attempts
last_activity
custom_fields {
  ${CUSTOM_FIELD_VALUE}
}
`;

const EMAIL_TEMPLATE_BODY = `
__typename
id
name
subject
body
team_id
`;

const EMAIL_BODY = `
__typename
id
contact_id
labels
gid
thread_id
from_email
from_name
snippet
html_body
subject
date
to
cc
bcc
`;

const JOB_BODY = `
__typename
id
location
title
description
requirements
`;

/* RULE SET BODIES */
const RULE_FIELD_BODY = `
__typename
id
field
alias
entity
type
catalog_type_id
`;

const RULE_ACTION_BODY = `
__typename
id
type
target
target_id
target_meta
`;

const RULE_PARAMETER_BODY = `
__typename
id
conditional_operator
logical_operator
value
rule_field_id
`;

const SALES_STAGE_BODY = `
__typename
id
stage_name
type
order
forecast_percentage
forecast_category_id
`;

const PIPELINE_CONFIG_BODY = `
id
__typename
fiscal_year_month
year_configs{
  id
  __typename
  year
  annual_target
  q1_target
  q2_target
  q3_target
  q4_target
}
`;

const SOURCE_BODY = `
id,
__typename
sync_enabled
sync_account {
  id
  __typename
  source
  email_address
  sync_enabled
  trade_request {
    id
    __typename
    requested_to {
      id
      __typename
      first_name
      last_name
    }
    created_at
  }
}
`;

const CUSTOM_FIELD_CONFIGURATION_BODY = `
id
__typename
list_order
list_showable
form_order
form_required
filter_order
filter_showable
`;

const ENTITY_BODY_MIN = `
  __typename
  entity_id
  entity_name
  referenced_entity_id
  referenced_entity_name
  logo_name
  logo_id
`;

/* **** COMPOSITE BODIES ****** */

const TASK_BODY = `
detail
closed_date
owner_id
__typename
id
description
type
due_date
closed_at
status
note
from
to
subject
message
duration
links
deleted
created_at
updated_at
assigned_to {
  ${AGENT_BODY_MIN}
}
completed_by {
  ${AGENT_BODY_MIN}
}
created_by {
  ${AGENT_BODY_MIN}
}
type
entity {
  ${ENTITY_BODY_MIN}
}
source_name
logo_name
emailRecipients {
  to
  cc
  bcc
}
metadata
`;

const SYNC_ACCOUNT_BODY = `
__typename
id
email_address
source
sync_enabled
token
from_agent
sync_history {
  ${SYNC_HISTORY_BODY}
}
`;

const CONTACT_BODY = `
${CONTACT_BODY_SHORT}
home_address
work_address
alternate_address_1
linkedIn
facebook
twitter
source
created_at
updated_at
sources {
  ${SOURCE_BODY}
}
logo {
  ${LOGO_BODY_MIN}
  agent_id
  industry
}
`;

const CHANNEL_CONTACT_BODY = `
${CONTACT_BODY_SHORT}
logo {
  ${LOGO_BODY_MIN}
  agent_id
  industry
}
role_id: deal_role
highlighted: deal_highlighted
`;

const LEAD_BODY = `
${LEAD_BODY_SHORT}
logo {
  ${LOGO_BODY_MIN}
  agent_id
  industry
  industry_catalog_id
}
`;

const MESSAGE_BODY = `
id
__typename
type
message
action
field
pre_value
new_value
from {
  ${AGENT_BODY_MIN}
}
affected {
  ${GENERIC_MIN}
}
attachment {
  __typename
  file_name
  file_description
  code
  extension
  mime_type
}
created_at
channel_id
`;
const CHANNEL_BODY_MIN = `
id
__typename
name
owner {
  ${AGENT_BODY_MIN}
}
`;
const CHANNEL_BODY = `
${CHANNEL_BODY_MIN}
channel_agents {
  ${CHANNEL_AGENT_BODY}
}
invitations{
  ${INVITATION_BODY}
}
`;

const CHANNEL_BODY_LIST = `
${CHANNEL_BODY_MIN}
agents{
  ${AGENT_BODY_MIN}
}
channel_agents {
  ${CHANNEL_AGENT_BODY}
}
`;

const EVENT_ATTENDEE_BODY = `
__typename
id
event_id
email_address
name
is_owner
status
contact {
  ${CONTACT_BODY_SHORT}
}
agent {
  ${AGENT_BODY_MIN}
}
`;

const PHONE_CALL_BODY = `
id
__typename
contact_id
call_sid
duration
status
alias
notes
created_at
updated_at
contact {
  ${CONTACT_BODY_SHORT}
}
`;

const RULE_SET_BODY = `
__typename
id
team_id
agent_id
name
order
actions{
  ${RULE_ACTION_BODY}
}
rules{
  ${RULE_PARAMETER_BODY}
}
`;


/* LOGO BODIES */

const LOGO_BODY_MERGE = `
${LOGO_BODY_MIN}
contact_count
`;

const LOGO_BODY_EXP = `
${LOGO_BODY_MIN}
industry
hq_location
locations{
${LOCATION_BODY}
}
`;

const LOGO_BODY_FAV = `
${LOGO_BODY_MERGE}
follow
favorite
install_base
territory
`;

const LOGO_BODY_ALL = `
${LOGO_BODY_FAV}
agent_id
team_id
status
num_employees
numstudents
website
summary
industry
industry_catalog_id
hq_location
revenue
last_activity
custom_fields {
  ${CUSTOM_FIELD_VALUE}
}
locations {
  ${LOCATION_BODY}
}
`;

const LOGO_BODY_FULL = `
${LOGO_BODY_ALL}
website
summary
key_people
industry
industry_catalog_id
wikipediaurl
type
hq_location
traded_as
parentid
parent
founded
universitytype
nickname
endowment
chancellor
president
provost
undergraduates
postgraduates
revenue
description
custom_fields{
  ${CUSTOM_FIELD_VALUE}
}
locations {
  ${LOCATION_BODY}
}
contacts_by_agent(order:[["buying_power","desc"],["last_name","asc"]]) {
  ${CONTACT_BODY_SHORT}
}
`;

/* EXPERIENCES */

const EXPERIENCE_COMMON = `
__typename
id
from
to
current_active
location_name
description
logo{
${LOGO_BODY_EXP}
}
location{
${LOCATION_BODY}
}
`;

const EDUCATION_BODY = `
${EXPERIENCE_COMMON}
field
grade
`;

const WORK_EXPERIENCE_BODY = `
${EXPERIENCE_COMMON}
title
`;
/* TEAMS BODY */

const CONCIERGE_BODY = `
  __typename
  id
  first_name
  last_name
  portrait_url
  mobile_phone
  email_address
`;

const TEAM_BODY_BASIC = `
__typename
id
name
portrait_url
onboarding_step
logo {
  ${LOGO_BODY_MIN}
}
concierge {
  ${CONCIERGE_BODY}
}
`;

const SUBSCRIPTION_BODY = `
__typename
id
plan_id
subscription_status
subscription_renewal
subscription_seats
subscription_start
subscription_seat_price
trial_ends
current_date
`;

const TEAMS_BODY_SHORT = `
${TEAM_BODY_BASIC}
channel {
  ${GENERIC_MIN}
  channel_agents {
    ${CHANNEL_AGENT_BODY}
  }
  owner {
    ${AGENT_BODY_MIN}
  }
}
`;

const TEAM_BODY_FULL = `
${TEAM_BODY_BASIC}
channel{
  ${CHANNEL_BODY}
}
tasks {
  ${TASK_BODY}
}
`;

/* PLAN BODIES */
const PLAN_BODY = `
__typename
id
name
display_name
image
type
period
default_price
max_users
base_price
base_period
`;

/* AGENT BODIES */
const AGENT_PUBLIC_BODY = `
${AGENT_BODY_MIN}
agent_id
current_position
birth_date
logo_count
linkedIn
facebook
twitter
bio
presence
sales_role
network_status
contactsSummary{
  ${CONTACTS_SUMMARY_BODY}
}
industry_count{
  ${INDUSTRY_COUNT_BODY}
}
buying_center_count{
  ${BUYING_CENTER_COUNT_BODY}
}
logo{
  ${LOGO_BODY_EXP}
}
education{
  ${EDUCATION_BODY}
}
experience{
  ${WORK_EXPERIENCE_BODY}
}
sold_to_logos{
  ${LOGO_BODY_MIN}
}
teams{
  ${TEAMS_BODY_SHORT}
}

`;

const AGENT_SELF_BODY = `
${AGENT_PUBLIC_BODY}
pending_approvals
points
signature
`;

const AGENT_WITH_LOGO_BODY = `
${AGENT_BODY_MIN}
current_position
logo{
  ${LOGO_BODY_MIN}
}
`;

const AGENT_BODY = `
${AGENT_WITH_LOGO_BODY}
deal_role
network_status
status
deleted
`;

const AGENT_LIST_BODY = `
${AGENT_BODY_MIN}
current_position
logo{
  ${LOGO_BODY_MIN}
}
`;
const DEAL_ONLY_BODY = `
id
__typename
name
`;

const DEAL_MAIN_BODY = `
id
__typename
name
closeDate: close_date
createDate: created_at
updateDate: updated_at
amount
dealState: deal_state
winProbability: win_probability
sales_stage_id
weighted_forecast
sales_cycle
type_id
lead_source_id
forecast_category_id
fiscal_period
stage_changed_at
modified_id
`;

const DEAL_BODY = `
${DEAL_MAIN_BODY}
status
created_by {
  ${AGENT_BODY_MIN}
}
`;
/* DEALS BODIES */
const DEAL_BODY_MIN = `
${DEAL_BODY}
custom_fields {
  ${CUSTOM_FIELD_VALUE}
}
location {
  ${LOCATION_BODY}
}
logos{
  ${LOGO_BODY_MIN}
}
`;

const DEAL_CHANGE_BODY = `
  changes {
      deal_id
      deal
      field
      oldValue
      newValue
      onDate
      hid
      by {
        id
        first_name
        last_name
        portrait_url
      }
  }
`;

const DEAL_BODY_LIST = `
  ${DEAL_BODY_MIN}
  channel{
    ${CHANNEL_BODY_LIST}
  }
`;

const DEAL_BODY_DETAIL = `
${DEAL_BODY_MIN}
channel{
  ${CHANNEL_BODY_LIST}
}
`;

const CUSTOM_FIELD_BODY = `
id
__typename
field_name
table_name
data_type
display_name
data_source
is_active
field_configuration {
  ${CUSTOM_FIELD_CONFIGURATION_BODY}
}
`;
const ENTITY_COUNT_BODY = `
id
__typename
entity
entity_id
unread_count
`;
const EVENT_FULL_BODY = `
${EVENT_MIN_BODY}
attendees{
  ${EVENT_ATTENDEE_BODY}
}
logos {
  ${LOGO_BODY_MIN}
}
deals {
  ${DEAL_MAIN_BODY}
}
`;


module.exports = {
  DEAL_BODY_LIST: DEAL_BODY_LIST,
  LEAD_BODY: LEAD_BODY,
  SALES_STAGE_BODY: SALES_STAGE_BODY,
  CHANNEL_CONTACT_BODY: CHANNEL_CONTACT_BODY,
}
