const initialState = [];

export default function playlists(state = initialState, action = "ADD_NEW_TRACK") {
  if (action.type === 'ADD_NEW_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}