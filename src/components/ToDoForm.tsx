import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoListSlice.js";

const onClickResetButton = (
  event: React.MouseEvent<SVGSVGElement, MouseEvent>
) => {
  event.preventDefault();
  const toDoField = document.getElementById("js-todo-field") as HTMLFormElement;
  toDoField.value = "";
};

export const ToDoForm = () => {
  const dispatch = useDispatch();

  const onClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const toDoField = document.getElementById(
      "js-todo-field"
    ) as HTMLFormElement;
    if (toDoField.value === "") return;
    dispatch(addTodo({ title: toDoField.value, id: uuidv4() }));
    toDoField.value = "";
  };

  return (
    <form action="" className="w-full">
      <div className="flex w-full">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="What is your todo"
            className="pl-6 pr-8 py-5 w-full border-2 border-white focus:border-2 focus:border-black/70 outline-0"
            id="js-todo-field"
          />
          <button className="absolute right-2 top-[50%] translate-y-[-50%] hover:opacity-70">
            <CloseIcon onClick={onClickResetButton} />
          </button>
        </div>
        <button
          type="submit"
          onClick={onClickSubmit}
          className="font-en text-lg bg-[#f7c9c0] px-5 py-2 w-[100px] color-[#333] ml-2 rounded-lg tracking-wider hover:bg-[#f1a99a]"
        >
          Add
        </button>
      </div>
    </form>
  );
};
