const initialState = [];

export default function tracks(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }else if (action.type === 'REMOVE_TRACK') {
    return state;
  }
  return state;
}