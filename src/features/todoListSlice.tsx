import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [
  {
    id: "jkldjskalj99",
    title: "買い物へいく",
    completed: true,
  },
];

export const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, "completed">>) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload);
    },
    toggleComplete: (state, action) => {
      const target = state.find((s) => s.id === action.payload);
      if (!target) return;
      target.completed = !target.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoListSlice.actions;
export default todoListSlice.reducer;
