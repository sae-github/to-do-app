import { useEffect, useState } from "react";
const osDark = window.matchMedia("(prefers-color-scheme: dark)");
const theme = localStorage.getItem("theme");

const onDarkMode = () => {
  console.log("ON Dark");
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const offDarkMode = () => {
  console.log("OFF Dark");
  document.documentElement.classList.remove("dark");
  localStorage.removeItem("theme");
};

osDark.addEventListener("change", (event) => {
  event.matches ? onDarkMode() : offDarkMode();
});

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(theme) || osDark.matches
  );

  const toggleDarkMode = () => setIsDarkMode((mode) => !mode);

  useEffect(() => {
    isDarkMode ? onDarkMode() : offDarkMode();
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};
