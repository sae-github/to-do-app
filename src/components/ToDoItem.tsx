import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export const ToDoItem = ({
  list,
  onClickDelete,
  onClickCheckbox,
}: {
  list: TodoItem;
  onClickDelete: (id: string) => void;
  onClickCheckbox: (id: string) => void;
}) => {
  return (
    <li className="flex bg-white mb-3 p-3">
      <input
        type="checkbox"
        name=""
        className="mr-3 peer"
        checked={list.completed}
        onChange={() => onClickCheckbox(list.id)}
      />
      <p className="peer-checked:line-through">{list.title}</p>
      <button className="cursor-pointer ml-auto">
        <DeleteSharpIcon onClick={() => onClickDelete(list.id)} />
      </button>
    </li>
  );
};
