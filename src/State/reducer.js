const ADD_SURVEY = 'ADD_SURVEY';
const ADD_SURVEYS = 'ADD_SURVEYS';

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_SURVEYS:
      return action.payload;
    case ADD_SURVEY:
      return [action.payload, ...state];
    default:
      return state;
  }
}
