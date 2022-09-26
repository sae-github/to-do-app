import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CloseIcon from "@mui/icons-material/Close";
import { memo } from "react";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export const ToDoItem = memo(
  ({
    list,
    onClickDelete,
    onClickCheckbox,
  }: {
    list: TodoItem;
    onClickDelete: (id: string) => void;
    onClickCheckbox: (id: string) => void;
  }) => {
    return (
      <li className="flex bg-white mb-3 p-3 pl-[40px] relative ">
        <label className="peer-checked:line-through cursor-pointer w-full">
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
      </li>
    );
  }
);
