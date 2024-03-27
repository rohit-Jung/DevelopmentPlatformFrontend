import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sorting, TodoForm } from "./components";
import { deleteAllTodos, deleteCompletedTodos } from "./app/Slices/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const handleDeleteCompleted = () => {
    dispatch(deleteCompletedTodos());
  };

  const handleDeleteAll = (e) => {
    e.preventDefault();
    dispatch(deleteAllTodos());
  };

  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
    setShowAll(false);
  };

  const handleAll = () => {
    if (!showAll) {
      setShowAll(true);
      setIsCompleted(false);
    }
  };

  return (
    <div className="bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-5">
      <div className="bg-[url('./background.png')] bg-opacity-0 bg-cover bg-center h-screen w-full flex items-center justify-center py-10 backdrop-filter backdrop-blur-[4px]">
        <div className="no-scrollbar scroll-smooth inset-0 bg-gradient-to-br from-white/15 to-transparent backdrop-filter backdrop-blur-[10px] border-opacity-18 border-solid border-soft-white rounded-lg shadow-lg w-full max-w-2xl h-[90vh] px-10 py-10 text-white overflow-auto">
          <h1 className="text-3xl font-bold text-center mb-8  font-revolution tracking-widest">
            Todo App{" "}
          </h1>
          <div className="mb-4 font-roboto">
            <TodoForm />
          </div>
          <div className="w-full">
            <Sorting
              todos={todos}
              isCompleted={isCompleted}
              handleCompleted={handleCompleted}
              handleAll={handleAll}
              showAll={showAll}
              handleDeleteCompleted={handleDeleteCompleted}
              handleDeleteAll={handleDeleteAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
