const initialState = "";

export default function question(state = initialState, action = "CHANGE_QUESTION") {
  if (action.type === 'CHANGE_QUESTION') {
    return action.payload;
  }
  return state;
}