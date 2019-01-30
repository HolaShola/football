const initialState = {
    league: {
        country: '',
        comands: []
    }
};

export default function ComandReducer(state = initialState, action) {
  switch (action.type) {
    case '':
      return action.payload;
    default: return state;
  }
}