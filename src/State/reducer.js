import {
  ADD_SURVEY,
  ADD_SURVEY_ANSWER,
  ADD_SURVEY_ANSWERS,
  ADD_SURVEYS,
  REMOVE_SURVEY
} from './actions';

export const initialState = [];

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_SURVEYS:
      return action.payload;
    case ADD_SURVEY:
      return [action.payload, ...state];
    case REMOVE_SURVEY:
      return state.filter(survey => survey.id !== action.payload);
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
