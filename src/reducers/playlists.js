const initialState = [
  '33333',
  '44444'
];

export default function playlists(state = initialState, action) {
  if (action.type === 'ADD_PLAYLIST') {
    return [
      ...state,
      action.payload
    ];
  }else if (action.type === 'REMOVE_PLAYLIST') {
    return state;
  }
  return state;
}