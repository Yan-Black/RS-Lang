export enum ActionType {
  SET_NEW_USER = 'SET_NEW_USER',
  SET_USER_NAME = 'SET_USER_NAME',
  SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN',
  REMOVE_TOKEN = 'REMOVE_TOKEN',
  SET_LOGGED = 'SET_LOGGED',
  SET_UNLOGGED = 'SET_UNLOGGED',
  ADD_API_ERROR_MESSAGE = 'ADD_API_ERROR_MESSAGE',
  REMOVE_API_ERROR_MESSAGE = 'REMOVE_API_ERROR_MESSAGE',
  OPEN_REG_FORM = 'OPEN_REG_FORM',
  CLOSE_REG_FORM = 'CLOSE_REG_FORM',
  OPEN_LOG_FORM = 'OPEN_LOG_FORM',
  CLOSE_LOG_FORM = 'CLOSE_LOG_FORM',
  UPDATE_VISITS = 'UPDATE_VISITS',
  UPDATE_USER_WORDS_AMOUNT = 'UPDATE_USER_WORDS_AMOUNT',
  UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS',
  UPDATE_USER_LEARNED_WORDS = 'UPDATE_USER_LEARNED_WORDS',
  UPDATE_USER_STATISTIC = 'UPDATE_USER_STATISTIC',
  SHOW_FORM_LOADER = 'SHOW_FORM_LOADER',
  HIDE_FORM_LOADER = 'HIDE_FORM_LOADER',
}
