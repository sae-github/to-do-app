import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { ToDoItem } from "./ToDoItem";
import { toggleComplete, deleteTodo } from "../features/todoListSlice.js";
import { useCallback } from "react";

export const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onClickDelete = useCallback((targetId: string): void => {
    dispatch(deleteTodo(targetId));
  }, []);

  const onClickCheckbox = useCallback((id: string): void => {
    dispatch(toggleComplete(id));
  }, []);

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
