import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

interface DarkMode {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Header = ({ toggleDarkMode, isDarkMode }: DarkMode) => {
  return (
    <header className="bg-[#3aa7a0] text-white p-3 text-center dark:bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-[20px] relative">
        <h1 className="text-3xl font-en">React TODO App</h1>
        {isDarkMode ? (
          <Brightness7Icon
            className="cursor-pointer hover:opacity-75 absolute right-0 top-1/2 translate-y-[-50%]"
            onClick={toggleDarkMode}
          />
        ) : (
          <Brightness4Icon
            className="cursor-pointer hover:opacity-75 absolute right-0 top-1/2 translate-y-[-50%]"
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </header>
  );
};
