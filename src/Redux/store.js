import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/counterReducer";

const store = configureStore({
  reducer: { counterReducer: counterReducer },
});

export default store;
