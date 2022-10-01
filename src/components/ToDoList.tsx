import { useDispatch } from "react-redux";
import { ToDoItem } from "./ToDoItem";
import { toggleComplete, deleteTodo } from "../features/todoListSlice.js";
import { useCallback } from "react";
import { Todo as TodoList } from "../features/todoListSlice";

export const ToDoList = ({ filteredList }: { filteredList: TodoList[] }) => {
  const dispatch = useDispatch();

  const onClickDelete = useCallback((targetId: string): void => {
    dispatch(deleteTodo(targetId));
  }, []);

  const onClickCheckbox = useCallback((id: string): void => {
    dispatch(toggleComplete(id));
  }, []);

  return (
    <ul className="mt-7">
      {filteredList.map((list) => (
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
