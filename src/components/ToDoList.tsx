import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useSelector } from "react-redux";

export const ToDoList = () => {
  const todoList = useSelector((state) => state.todo);

  return (
    <ul className="mt-5 [&_li]:bg-white [&_li]:mb-3 [&_li]:p-3 ">
      {todoList.map((list, i) => (
        <li className="flex" key={i}>
          <input type="checkbox" name="" id="" className="mr-3 peer" />
          <p className="peer-checked:line-through">{list.text}</p>
          <DeleteSharpIcon className="cursor-pointer ml-auto" />
        </li>
      ))}
    </ul>
  );
};
