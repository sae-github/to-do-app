import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);

  return (
    <ul className="mt-5">
      {todoList.map((list, i) => (
        <li className="flex bg-white mb-3 p-3" key={i}>
          <input type="checkbox" name="" id="" className="mr-3 peer" />
          <p className="peer-checked:line-through">{list.title}</p>
          <DeleteSharpIcon className="cursor-pointer ml-auto" />
        </li>
      ))}
    </ul>
  );
};
