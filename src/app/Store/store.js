import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todoSlice";

// Configuring the Redux store with the todoReducer
// Redux store is initialized with a reducer to manage state changes
// The reducer specifies how state should be updated based on dispatched actions
export const store = configureStore({
    reducer: todoReducer, // The reducer function that will handle state updates
});
