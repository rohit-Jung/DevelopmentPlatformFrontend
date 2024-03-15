import { TodoForm, TodoItem, Sorting } from "./components";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos); 
  //useSelector ? - it is also a hook by react-redux used to select items from the store
  return (
    <div className="bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-5">
      <div className="bg-[url('/background.png')] bg-opacity-0 bg-cover bg-center h-screen w-full flex items-center justify-center py-10 backdrop-filter backdrop-blur-[4px]">
        <div className="no-scrollbar scroll-smooth inset-0 bg-gradient-to-br from-white/15 to-transparent backdrop-filter backdrop-blur-[10px] border-opacity-18 border-solid border-soft-white rounded-lg shadow-lg w-full max-w-2xl h-[90vh] px-10 py-10 text-white overflow-auto">
          <h1 className="text-3xl font-bold text-center mb-8  font-revolution tracking-widest">
            Todo App{" "}
          </h1>
          <div className="mb-4 font-roboto">
            <TodoForm />
          </div>
          <div className="font-roboto mb-4">
            <Sorting />
          </div>
          <div className="flex flex-wrap gap-y-3 font-roboto">
            {/* since todos is an array [in the store] we can map out each item and pass to the todoItem accordingly */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
