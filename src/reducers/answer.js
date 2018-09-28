let answer = "";

export default function gerAnswer(state = answer, action = "SET_ANSWER") {
  if (action.type === 'SET_ANSWER') {
    return action.payload;
  }
  return state;
}