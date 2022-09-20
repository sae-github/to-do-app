import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../fatures/todoListSlice";

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
  },
});
