import { Header } from "./components/Header";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

export const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-9 px-[20px]">
        <ToDoForm />
        <ToDoList />
      </div>
    </>
  );
};
