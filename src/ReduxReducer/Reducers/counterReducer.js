const initialState = {
  count: 1,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
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
