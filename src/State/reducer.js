const ADD_ANSWERS = 'ADD_ANSWERS';
const ADD_ANSWER_TYPE = 'ADD_ANSWER_TYPE';
const ADD_INPUT_TYPE = 'ADD_INPUT_TYPE';
const ADD_QUESTION = 'ADD_QUESTION';
const ADD_RANGE_VALUES = 'ADD_RANGE_VALUES';
const ADD_TITLE = 'ADD_TITLE';
const EDIT_QUESTION = 'EDIT_QUESTION';
const EDIT_TITLE = 'EDIT_TITLE';
const HAS_LAST_INPUT = 'HAS_LAST_INPUT';
const REMOVE_QUESTION = 'REMOVE_QUESTION';
const TOGGLE_EDIT = 'TOGGLE_EDIT';

export function surveyReducer(state, action) {
  switch (action.type) {
    case ADD_TITLE:
      return { ...state, id: action.payload.id, title: action.payload.title };
    case EDIT_TITLE:
      return { ...state, title: action.payload };
    case ADD_QUESTION:
      return { ...state, questions: action.payload };
    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          question => question.id !== action.payload
        )
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        questions: state.questions.map(question =>
          question.id === action.payload.id
            ? {
                ...question,
                isQuestion: false
              }
            : question
        )
      };
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
    case ADD_ANSWER_TYPE:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              answerType: action.payload.type,
              inputType: undefined,
              answers: undefined,
              hasLastInput: undefined,
              startValue: undefined,
              endValue: undefined,
              stepValue: undefined
            }
          : question
      );
    case ADD_INPUT_TYPE:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              inputType: action.payload.type
            }
          : question
      );
    case ADD_ANSWERS:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              answers: action.payload.answers
            }
          : question
      );
    case HAS_LAST_INPUT:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              hasLastInput: action.payload.hasLastInput
            }
          : question
      );
    case ADD_RANGE_VALUES:
      return state.map(question =>
        question.id === action.payload.id
          ? {
              ...question,
              startValue: action.payload.range.startValue,
              endValue: action.payload.range.endValue,
              stepValue: action.payload.range.stepValue
            }
          : question
      );
    default:
      return state;
  }
}
