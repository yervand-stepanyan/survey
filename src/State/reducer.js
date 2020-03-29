const SET_TITLE = 'SET_TITLE';
const EDIT_TITLE = 'EDIT_TITLE';

export default function titleReducer(state, action) {
  switch (action.type) {
    case EDIT_TITLE:
      return { title: action.payload, isTitle: false };
    case SET_TITLE:
      return { title: action.payload, isTitle: true };
    default:
      return state;
  }
}
