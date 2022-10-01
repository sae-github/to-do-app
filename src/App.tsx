import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { useDarkMode } from "./hooks/useDarkMode";

export const App = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Todo />
    </div>
  );
};
