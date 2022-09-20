import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "買い物に行く",
  },
];

export const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
