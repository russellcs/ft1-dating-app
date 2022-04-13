export const types = {
  DELETE_MESSAGE: "DELETE_MESSAGE", //deletes message from database
  BLOCK_USER: "BLOCK_USER", //adds blocked user id to database
  SET_USER_INPUT: "SET_USER_INPUT", // Not used?
  ADD_MESSAGE: "ADD_MESSAGE", // adds message content to database with corresponding userId and foreignId
  ADD_USER: "ADD_USER", // adds user to database server
  ADD_TO_SEEN: "ADD_TO_SEEN", // adds foreign id to users seen array
  SET_SCREEN: "SET_SCREEN", // changes screen 0= onboarding, 1= matches screen, 2= messages
  SET_ONBOARDING_SCREEN: "SET_ONBOARDING_SCREEN", //changes screen for onboarding 0=register 1=login
  SET_REGISTER_SCREEN: "SET_REGISTER_SCREEN", //changes screen for registration steps 0=RegisterPartOne 1=RegisterPartTwo 2=RegisterPartThree 3=Preferences 4=Selfie
  ON_INPUT_REG: "ON_INPUT_REG", // saves form data from registration form
  ADD_TO_LIKES: "ADD_TO_LIKES", // adds foreign id to users seen array when liked
  UPDATE_MATCHES: "UPDATE_MATCHES", // if two users like eachother, adds each id to other's matches array
  SET_REG_ERRORS: "SET_REG_ERRORS", //sets registration form errors from joi
  SET_FILTER_OPTIONS: "SET_FILTER_OPTIONS", //sets matchingFilter for age, gender, height, distance, existing kids, open to kids and seen filter
  SET_CURRENT_USER_ID: "SET_CURRENT_USER_ID", //sets userID
  SET_LOGGED_IN_STATUS: "SET_LOGGED_IN_STATUS", //sets logged in status to true
  LOG_OUT: "LOG_OUT", //set logged in status to false
  BYPASS_ONBOARDING: "BYPASS_ONBOARDING", // changes screen value to matches screen, sets current user id to 38, sets logged in as true
  GET_USER_MESSAGES: "GET_USER_MESSAGES",
  GET_ALL_USERS: "GET_ALL_USERS", // this is for the API to go and get the users
  SET_ALL_USERS: "SET_ALL_USERS", // redux - set all users and send to store
  SET_ALL_MESSAGES: "SET_ALL_MESSAGES", // redux - set all messages and send to store
  GET_TOKEN: "GET_TOKEN", //gets token from database
  SET_TOKEN: "SET_TOKEN", //sets token to store
};
