import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
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
  {
    id: "hoeghoge",
    title: "請求書の作成",
    completed: false,
  },
  {
    id: "fafafaffafa",
    title: "書類の整理をする",
    completed: false,
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
    deleteTodo: (state, action: PayloadAction<string>) => {
      const targetIndex = state.findIndex((s) => s.id === action.payload);
      if (targetIndex === -1) return;
      state.splice(targetIndex, 1);
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
