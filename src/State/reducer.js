const EDIT_TITLE = 'EDIT_TITLE';
const SET_TITLE = 'SET_TITLE';

const EDIT_QUESTION = 'EDIT_QUESTION';
const SET_QUESTION = 'SET_QUESTION';

const ADD_TITLE = 'ADD_TITLE';
const ADD_QUESTION = 'ADD_QUESTION';

export function titleReducer(state, action) {
  switch (action.type) {
    case EDIT_TITLE:
      return { title: action.payload, isTitle: false };
    case SET_TITLE:
      return { title: action.payload, isTitle: true };
    default:
      return state;
  }
}

export function questionReducer(state, action) {
  switch (action.type) {
    case EDIT_QUESTION:
      return { question: action.payload, isQuestion: false };
    case SET_QUESTION:
      return { question: action.payload, isQuestion: true };
    default:
      return state;
  }
}

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
