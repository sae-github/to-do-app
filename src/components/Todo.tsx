import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ToDoFilter } from "./ToDoFilter";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { Todo as TodoList } from "../features/todoListSlice";

const switchFilteredList = (list: TodoList[], state: string) => {
  switch (state) {
    case "completed":
      return [...list].filter((data) => data.completed);

    case "uncompleted":
      return [...list].filter((data) => !data.completed);

    default:
      return list;
  }
};

export const Todo = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const [sortStatus, setSortStatus] = useState("default");
  const filteredList = switchFilteredList(todoList, sortStatus);

  return (
    <div className="max-w-4xl mx-auto mt-9 px-[20px]">
      <ToDoForm />
      <ToDoFilter setSortStatus={setSortStatus} sortStatus={sortStatus} />
      <ToDoList filteredList={filteredList} />
    </div>
  );
};
