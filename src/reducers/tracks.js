const initialState = [
  {
    id: '1',
    name: 'Oxymoron'
  },
  {
    id: '2',
    name: 'T-fest'
  },
  {
    id: '3',
    name: 'Guf'
  },
  {
    id: '4',
    name: 'Basta'
  }
];

export default function tracks(state = initialState, action = "ADD_TRACK") {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}