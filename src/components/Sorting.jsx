import React from "react";
import TodoItem from "./TodoItem";

function Sorting({
  todos,
  isCompleted,
  handleCompleted,
  handleAll,
  showAll,
  handleDeleteCompleted,
}) {
  return (
    <div className="font-roboto w-full flex gap-4 mb-4 flex-col justify-center items-center">
      {/* Sorting buttons */}
      <div className="w-full flex gap-4">
        <button
          className={`flex-1 rounded-lg align-top px-5 py-1 text-white shrink-0 hover:bg-yellow-950 hover:text-gray-100 ${
            !showAll ? "bg-yellow-950" : "bg-yellow-600"
          }`}
          onClick={handleCompleted}
        >
          {isCompleted ? "Unfinished Todos" : "Finished Todos "}
        </button>
        <button
          className={`flex-1 rounded-lg px-5 py-1 text-white shrink-0 hover:bg-red-950 hover:text-gray-100 ${
            !isCompleted && showAll ? "bg-red-950" : " bg-red-700"
          }`}
          onClick={handleAll}
        >
          All Todos
        </button>
        <button
          className="flex-1 rounded-lg px-5 py-1 text-white  bg-green-700 shrink-0 hover:bg-green-950 hover:text-gray-100"
          onClick={handleDeleteCompleted}
        >
          Delete Completed
        </button>
      </div>
      {/* Rendering todos */}
      <div className="flex flex-col font-roboto w-full">
        {todos.map((todo) => (
          <div className="w-full mb-2" key={todo.id}>
            {(showAll || isCompleted === todo.completed) && (
              <TodoItem todo={todo} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sorting;
