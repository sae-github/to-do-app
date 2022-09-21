import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [
  {
    title: "買い物へいく",
    completed: false,
  },
];

export const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ title: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
