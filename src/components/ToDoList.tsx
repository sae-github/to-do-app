import { useDispatch } from "react-redux";
import { ToDoItem } from "./ToDoItem";
import {
  toggleComplete,
  deleteTodo,
  sortDragAndDrop,
} from "../features/todoListSlice.js";
import { useCallback, useRef } from "react";
import { Todo as TodoList } from "../features/todoListSlice";

export const ToDoList = ({
  filteredList,
  todoList,
}: {
  filteredList: TodoList[];
  todoList: TodoList[];
}) => {
  const dispatch = useDispatch();

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const onDragEnd = () => {
    let todoItems = [...todoList];
    if (dragOverItem.current === null || dragItem.current === null) return;

    const draggedItemContent = todoItems.splice(dragItem.current, 1);
    todoItems.splice(dragOverItem.current, 0, ...draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    dispatch(sortDragAndDrop(todoItems));
  };

  const onClickDelete = useCallback((targetId: string): void => {
    dispatch(deleteTodo(targetId));
  }, []);

  const onClickCheckbox = useCallback((id: string): void => {
    dispatch(toggleComplete(id));
  }, []);

  const onDragStart = useCallback((index: number) => {
    dragItem.current = index;
  }, []);

  const onDragEnter = useCallback((index: number) => {
    dragOverItem.current = index;
  }, []);

  return (
    <ul className="mt-7">
      {filteredList.map((list, index) => (
        <ToDoItem
          list={list}
          key={list.id}
          index={index}
          onClickDelete={onClickDelete}
          onClickCheckbox={onClickCheckbox}
          onDragStart={onDragStart}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
        />
      ))}
    </ul>
  );
};
