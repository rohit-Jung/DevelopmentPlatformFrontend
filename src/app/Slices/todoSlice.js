import { createSlice, nanoid } from "@reduxjs/toolkit";

const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const setLocalStorageData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
  todos: getLocalStorageData("LocalTodo") || [
    { id: 1, text: "Namaste Sansar !!", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
  deleteAllTodos,
  deleteCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
