const initialState = "";

export default function trackName(state = initialState, action = "ADD_NEW_TRACK_NAME") {
  if (action.type === 'ADD_NEW_TRACK_NAME') {
    return action.payload;
  }
  return state;
}