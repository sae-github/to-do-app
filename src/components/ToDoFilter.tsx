interface TodoFilter {
  setSortStatus: (status: string) => void;
  sortStatus: string;
}

export const ToDoFilter = ({ setSortStatus, sortStatus }: TodoFilter) => {
  const onChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSortStatus(value);
  };

  return (
    <div className="mt-7 flex justify-center">
      <div className="mr-4 h-full">
        <input
          type="radio"
          id="default"
          name="todo-filter"
          value="default"
          onChange={onChangeRadioButton}
          checked={sortStatus === "default"}
          className="opacity-0 hidden peer"
        />
        <label
          htmlFor="default"
          className="font-en cursor-pointer py-2 px-6 bg-white border-2 border-black peer-checked:bg-amber-200 rounded-md"
        >
          All
        </label>
      </div>
      <div className=" mr-4">
        <input
          type="radio"
          id="uncompleted"
          name="todo-filter"
          value="uncompleted"
          onChange={onChangeRadioButton}
          className="opacity-0 hidden peer"
        />
        <label
          htmlFor="uncompleted"
          className="font-en cursor-pointer py-2 px-6 bg-white border-2 border-black peer-checked:bg-amber-200 rounded-md"
        >
          Active
        </label>
      </div>
      <div className="">
        <input
          type="radio"
          id="completed"
          name="todo-filter"
          value="completed"
          onChange={onChangeRadioButton}
          className="font-en opacity-0 hidden peer"
        />
        <label
          htmlFor="completed"
          className="font-en cursor-pointer py-2 px-6 bg-white border-2 border-black peer-checked:bg-amber-200 rounded-md"
        >
          Competed
        </label>
      </div>
    </div>
  );
};
