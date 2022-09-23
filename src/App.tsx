import { Header } from "./components/Header";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useDarkMode } from "./hooks/useDarkMode";

export const App = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="max-w-4xl mx-auto mt-9 px-[20px]">
        <ToDoForm />
        <ToDoList />
      </div>
    </div>
  );
};
