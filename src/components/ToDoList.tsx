import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export const ToDoList = () => {
  return (
    <ul className="mt-5 [&_li]:bg-white [&_li]:mb-3 [&_li]:p-3 ">
      <li className="flex">
        <input type="checkbox" name="" id="" className="mr-3 peer" />
        <p className="peer-checked:line-through">買い出しに行く</p>
        <DeleteSharpIcon className="cursor-pointer ml-auto" />
      </li>

      <li className="flex">
        <input type="checkbox" name="" id="" className="mr-3 peer" />
        <p className="peer-checked:line-through">郵便局で支払いをする</p>
        <DeleteSharpIcon className="cursor-pointer ml-auto" />
      </li>

      <li className="flex">
        <input type="checkbox" name="" id="" className="mr-3 peer" />
        <p className="peer-checked:line-through">Reactのドキュメントを見る</p>
        <DeleteSharpIcon className="cursor-pointer ml-auto" />
      </li>
    </ul>
  );
};
