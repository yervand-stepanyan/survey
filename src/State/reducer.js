const ADD_TITLE = 'ADD_TITLE';
const ADD_QUESTION = 'ADD_QUESTION';

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_TITLE:
      return state.length
        ? state.map(survey =>
            survey.id === action.payload.id
              ? {
                  ...survey,
                  title: action.payload.title
                }
              : {
                  ...survey,
                  id: action.payload.id,
                  title: action.payload.title
                }
          )
        : [
            {
              id: action.payload.id,
              title: action.payload.title
            }
          ];
    case ADD_QUESTION:
      return { ...state, question: action.payload };
    default:
      return state;
  }
}
