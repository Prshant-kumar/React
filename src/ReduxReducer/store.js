import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/counterReducer";

const store = configureStore({
  reducer: counterReducer,
});

export default store;
