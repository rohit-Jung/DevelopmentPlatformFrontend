import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteAllTodos } from "../app/Slices/todoSlice";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState(""); //to update the value in inputfield
  const dispatch = useDispatch();
  //useDispatch ? method provided by React-Redux to execute reducers and update them in store

  const formSubmitHandler = (event) => {
    event.preventDefault(); //prevents default behaviour of form [being submitted to backend path]

    if (!todoMsg.trim()) {
      //checks for empty string
      alert("Please enter a todo to add");
      return;
    }

    dispatch(addTodo(todoMsg));
    setTodoMsg(""); //flushes the field
  };

  const deleteAllHandler = (e) => {
    e.preventDefault();
    dispatch(deleteAllTodos());
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className="flex">
        <input
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          type="text"
          value={todoMsg} //using a state to change/modify the value here
          onChange={(e) => setTodoMsg(e.target.value)}
        />
        <button
          className="px-3 py-1 bg-slate-800 text-white shrink-0"
          type="submit"
        >
          {" "}
          <div className="size-6 rounded-full bg-slate-500 flex items-center justify-center text-[18px]">
            +{" "}
          </div>
        </button>
        <button
          className="rounded-r-lg px-3 py-1 bg-red-400 text-white shrink-0"
          onClick={deleteAllHandler}
        >
          {" "}
          Delete All{" "}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
