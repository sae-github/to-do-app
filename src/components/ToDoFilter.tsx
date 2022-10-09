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
      <div className="mr-4 h-[40px] w-[120px] text-center ">
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
          className="font-en cursor-pointer flex justify-center flex-col bg-white peer-checked:bg-amber-200 h-full w-full border-2 border-black rounded-md"
        >
          All
        </label>
      </div>
      <div className=" mr-4 h-[40px] w-[120px] text-center">
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
          className="font-en cursor-pointer flex justify-center flex-col bg-white peer-checked:bg-amber-200 h-full w-full border-2 border-black rounded-md"
        >
          Active
        </label>
      </div>
      <div className="h-[40px] w-[120px] text-center">
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
          className="font-en cursor-pointer flex justify-center flex-col bg-white peer-checked:bg-amber-200 h-full w-full border-2 border-black rounded-md"
        >
          Competed
        </label>
      </div>
    </div>
  );
};
