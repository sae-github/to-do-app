import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../feature/todoListSlice";

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
  },
});
