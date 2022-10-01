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
    <div className="mt-3">
      <input
        type="radio"
        id="default"
        name="todo-filter"
        value="default"
        onChange={onChangeRadioButton}
        checked={sortStatus === "default"}
      />
      <label htmlFor="default" className="cursor-pointer">
        すべて
      </label>
      <input
        type="radio"
        id="uncompleted"
        name="todo-filter"
        value="uncompleted"
        onChange={onChangeRadioButton}
      />
      <label htmlFor="uncompleted" className="cursor-pointer">
        未完了
      </label>
      <input
        type="radio"
        id="completed"
        name="todo-filter"
        value="completed"
        onChange={onChangeRadioButton}
      />
      <label htmlFor="completed" className="cursor-pointer">
        完了済み
      </label>
    </div>
  );
};
