const ADD_TITLE = 'ADD_TITLE';
// const ADD_QUESTIONS = 'ADD_QUESTIONS';

const ADD_QUESTION = 'ADD_QUESTION';
const EDIT_QUESTION = 'EDIT_QUESTION';
const REMOVE_QUESTION = 'REMOVE_QUESTION';
const TOGGLE_EDIT = 'TOGGLE_EDIT';

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
                  inProgress: true,
                  title: action.payload.title
                }
          )
        : [
            {
              id: action.payload.id,
              inProgress: true,
              title: action.payload.title
            }
          ];
    // case ADD_QUESTIONS:
    //   return [
    //     ...state,
    //     {
    //       ...state.find(survey => survey.id === action.payload.id),
    //       questions: state.find(survey => survey.id === action.payload.id)
    //         .questions.length
    //         ? [
    //             ...state.find(survey => survey.id === action.payload.id)
    //               .questions,
    //             {
    //               id: action.payload.questionId,
    //               question: action.payload.question
    //             }
    //           ]
    //         : [
    //             {
    //               id: action.payload.questionId,
    //               question: action.payload.question
    //             }
    //           ]
    //     }
    //   ];
    default:
      return state;
  }
}

export function questionsReducer(state, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        {
          id: action.payload.id,
          question: action.payload.question,
          isQuestion: true
        }
      ];
    case EDIT_QUESTION:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              question: action.payload.question,
              isQuestion: true
            }
          : question
      );
    case REMOVE_QUESTION:
      return state.filter(question => question.id !== action.payload);
    case TOGGLE_EDIT:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              isQuestion: false
            }
          : question
      );
    default:
      return state;
  }
}
