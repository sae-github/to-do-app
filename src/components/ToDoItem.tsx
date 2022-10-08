import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { memo } from "react";
import { Todo } from "../features/todoListSlice";

interface TodoItem {
  list: Todo;
  index: number;
  onClickDelete: (id: string) => void;
  onClickCheckbox: (id: string) => void;
  onDragStart: (index: number) => void;
  onDragEnter: (index: number) => void;
  onDragEnd: () => void;
}

export const ToDoItem = memo(
  ({
    list,
    index,
    onClickDelete,
    onClickCheckbox,
    onDragStart,
    onDragEnter,
    onDragEnd,
  }: TodoItem) => {
    return (
      <li
        className="bg-white mb-3 p-3 flex js-todo-item cursor-move"
        draggable
        onDragStart={() => onDragStart(index)}
        onDragEnter={() => onDragEnter(index)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnd={onDragEnd}
      >
        <DragHandleIcon />
        <div className="relative flex flex-1">
          <label className="peer-checked:line-through cursor-pointer pl-11 ">
            <input
              type="checkbox"
              id=""
              name=""
              className="mr-3 peer opacity-0 appearance-none absolute m-0"
              checked={list.completed}
              onChange={() => onClickCheckbox(list.id)}
            />
            <span
              className="h-[18px] w-[18px] border-slate-600 
          border-solid inline-block border-[1px] absolute left-[10px] top-1/2

        translate-y-[-50%] peer-checked:before:border-r-[4px] 
        peer-checked:before:content[''] peer-checked:before:block
        peer-checked:before:w-[11px] peer-checked:before:h-[18px] peer-checked:before:border-b-[4px] 
        peer-checked:before:border-solid peer-checked:before:border-[#F1A99A]
        peer-checked:before:rotate-[45deg] peer-checked:before:top-[5px] peer-checked:before:translate-y-[-50%]
        peer-checked:before:absolute peer-checked:before:left-1/2 peer-checked:before:translate-x-[-50%]
        "
            ></span>
            <span className="peer-checked:line-through">{list.title}</span>
          </label>
          <button className="cursor-pointer ml-auto hover:opacity-70">
            <DeleteSharpIcon onClick={() => onClickDelete(list.id)} />
          </button>
        </div>
      </li>
    );
  }
);
