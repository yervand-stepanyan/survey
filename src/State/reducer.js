const ADD_SURVEY = 'ADD_SURVEY';

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_SURVEY:
      return [action.payload, ...state];
    default:
      return state;
  }
}
