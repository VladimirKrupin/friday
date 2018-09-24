const initialState = "";

export default function searchFilter(state = initialState, action = "FIND_TRACK") {
  if (action.type === 'FIND_TRACK') {
    return action.payload;
  }
  return state;
}