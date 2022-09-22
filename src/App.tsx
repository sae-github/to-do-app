import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
const theme = localStorage.getItem("theme");

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(Boolean(theme));
  const toggleDarkMode = () => {
    setIsDarkMode((mode) => !mode);
  };

  useEffect(() => {
    if (
      isDarkMode ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);

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
