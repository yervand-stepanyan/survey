const ADD_SURVEY = 'ADD_SURVEY';
const ADD_SURVEY_ANSWER = 'ADD_SURVEY_ANSWER';
const ADD_SURVEY_ANSWERS = 'ADD_SURVEY_ANSWERS';
const ADD_SURVEYS = 'ADD_SURVEYS';
const REMOVE_SURVEY = 'REMOVE_SURVEY';

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_SURVEYS:
      return action.payload;
    case ADD_SURVEY:
      return [action.payload, ...state];
    case REMOVE_SURVEY:
      return action.payload;
    default:
      return state;
  }
}

export function surveyAnswerReducer(state, action) {
  switch (action.type) {
    case ADD_SURVEY_ANSWERS:
      return action.payload;
    case ADD_SURVEY_ANSWER:
      return [...state, action.payload];
    default:
      return state;
  }
}
