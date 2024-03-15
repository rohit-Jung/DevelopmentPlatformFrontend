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
    <div className="w-full">
      <button
        className="w-1/2 rounded-l-lg px-5 py-1 bg-red-700 text-white shrink-0"
        onClick={deleteAllHandler}
      >
        Delete all
      </button>
      <button
        className="w-1/2 rounded-r-lg px-5 py-1 bg-green-800 text-white shrink-0"
        onClick={deleteCompletedHandler}
      >
        Delete Completed
      </button>
    </div>
  );
}

export default Sorting;
