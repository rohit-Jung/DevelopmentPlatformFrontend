import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, toggleTodo, deleteTodo } from "../app/Slices/todoSlice";

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        text: todoMsg,
      })
    );
    setIsEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#89894b]" : "bg-[#becd5d]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor pointer"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className={`"inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center shrink-0 disabled:opacity-50 ${
          todo.completed ? "bg-gray-300" : "bg-gray-50"
        }`}
        onClick={() => {
          if (todo.completed) return;

          if (isEditable) {
            handleUpdate();
          } else {
            setIsEditable((prev) => !prev);
          }
        }}
      >
        {isEditable ? "📂" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={handleDelete}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
