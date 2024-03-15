import { createSlice, nanoid } from "@reduxjs/toolkit";

//getting the saved value from local storage to present it to user
//why ? this helps store the todos such that they won't vanish once the user refreshes the page or reloads the server
//concept of database ?
const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

//setting the updated store value to the local storage
//why ? -so that any changes on store could be replicated in the local storage and hence can be used later (synchronizes the store with localStorage)
const setLocalStorageData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

//initalState - the state of which is initially in the store
//this can also be directly injected in the Slice itself
const initialState = {
  todos: getLocalStorageData("LocalTodo") || [
    { id: 1, text: "Namaste Sansar !!", completed: false },
  ],
};

//Slice ? - A function/method combining reducer logic, actions and selector. A kind of reducer in itself
//consists of name, initialState and reducers 
export const todoSlice = createSlice({
  name: "todos",
  initialState, //feature of es6 / same key and value can be written
  reducers: {
    //every reducer have access to state and action inside cllback fnc
    //state - helps preserving the previous states
    //action - helps modify the states (receive the payload )
    //payload - a fancy name for data
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      setLocalStorageData("LocalTodo", state.todos);
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      // console.log(id, text);

      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
      state.todos = updatedTodos;
      setLocalStorageData("LocalTodo", updatedTodos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setLocalStorageData("LocalTodo", state.todos);
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      setLocalStorageData("LocalTodo", state.todos);
    },

    deleteAllTodos: (state) => {
      state.todos = [];
      setLocalStorageData("LocalTodo", state.todos);
    },

    deleteCompletedTodos: (state) => {
      let completedTodos = state.todos.filter((todo) => todo.completed);
      if (completedTodos.length == 0) {
        alert("No todos are completed currently");
        return;
      }
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

//exporting individual reducers to use them in components
export const {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
  deleteAllTodos,
  deleteCompletedTodos,
} = todoSlice.actions;

//to configure reducer in store
export default todoSlice.reducer;
