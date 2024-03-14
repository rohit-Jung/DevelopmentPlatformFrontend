import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/Slices/todoSlice";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!todoMsg.trim()) {
      alert("Please enter a todo to add");
      return;
    }

    dispatch(addTodo(todoMsg));
    setTodoMsg("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler} className="flex">
        <input
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
        <button
          className="rounded-r-lg px-3 py-1 bg-slate-500 text-white shrink-0"
          type="submit"
        >
          {" "}
          Add Todo{" "}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
