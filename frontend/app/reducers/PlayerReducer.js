const initialState = {
    players: [],
    comand: ''
};

const PlayerReducer = (state = initialState, action) => {
    switch (action.type) {
    case '':
      return action.payload;
    default: return state;
  }
};

export default PlayerReducer;