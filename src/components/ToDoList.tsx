import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { toggleComplete } from "../features/todoListSlice.js";

export const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul className="mt-5">
      {todoList.map((list) => (
        <li className="flex bg-white mb-3 p-3" key={list.id}>
          <input
            type="checkbox"
            name=""
            className="mr-3 peer"
            checked={list.completed}
            onChange={() => dispatch(toggleComplete(list.id))}
          />
          <p className="peer-checked:line-through">{list.title}</p>
          <DeleteSharpIcon className="cursor-pointer ml-auto" />
        </li>
      ))}
    </ul>
  );
};
