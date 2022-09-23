import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { ToDoItem } from "./ToDoItem";
import { toggleComplete, deleteTodo } from "../features/todoListSlice.js";

export const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onClickDelete = (targetId: string): void => {
    dispatch(deleteTodo(targetId));
  };

  const onClickCheckbox = (id: string): void => {
    dispatch(toggleComplete(id));
  };

  return (
    <ul className="mt-5">
      {todoList.map((list) => (
        <ToDoItem
          list={list}
          key={list.id}
          onClickDelete={onClickDelete}
          onClickCheckbox={onClickCheckbox}
        />
      ))}
    </ul>
  );
};
