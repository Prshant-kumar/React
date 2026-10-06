const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = {
        ...state,
        count: state.count + 1,
      };
      return state;
    case "DECREMENT":
      state = {
        ...state,
        count: state.count - 1,
      };
      return state;
    case "RESET":
      state = {
        ...state,
        count: 0,
      };
      return state;
    default:
      return state;
  }
};

export default counterReducer;
