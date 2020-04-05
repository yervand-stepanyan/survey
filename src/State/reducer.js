const ADD_TITLE = 'ADD_TITLE';
const ADD_QUESTION = 'ADD_QUESTION';

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_TITLE:
      return { ...state, title: action.payload };
    case ADD_QUESTION:
      return { ...state, question: action.payload };
    default:
      return state;
  }
}
