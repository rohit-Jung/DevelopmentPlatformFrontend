import { useDispatch } from "react-redux";
import { deleteAllTodos, deleteCompletedTodos } from "../app/Slices/todoSlice";

function Sorting() {
  //
  const dispatch = useDispatch();
  const deleteAllHandler = () => {
    dispatch(deleteAllTodos());
  };
  const deleteCompletedHandler = () => {
    dispatch(deleteCompletedTodos());
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <button
        className="w-full rounded-lg px-5 py-1 bg-red-700 text-white shrink-0 hover:bg-red-950 hover:text-gray-100"
        onClick={deleteAllHandler}
      >
        Delete all
      </button>
      <button
        className="w-full rounded-lg px-5 py-1 bg-green-800 text-white shrink-0 hover:bg-green-950 hover:text-gray-100"
        onClick={deleteCompletedHandler}
      >
        Delete Completed
      </button>
    </div>
  );
}

export default Sorting;
