import { useEffect, useState } from "react";
const osDark = window.matchMedia("(prefers-color-scheme: dark)");
const theme = localStorage.getItem("theme");

const onDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const offDarkMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.removeItem("theme");
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(Boolean(theme));

  const toggleDarkMode = () => setIsDarkMode((mode) => !mode);

  useEffect(() => {
    isDarkMode || osDark.matches ? onDarkMode() : offDarkMode();
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};
