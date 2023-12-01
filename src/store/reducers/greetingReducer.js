// src/store/reducers/greetingReducer.js
const initialState = {
  greeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING':
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
