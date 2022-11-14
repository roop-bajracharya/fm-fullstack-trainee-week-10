import { configureStore } from "@reduxjs/toolkit";
import { apiDataReducer } from "./apiData";
import { todosReducer } from "./todo.reducer";

/**
 * configureStore initializes the store with reducers
 * Multiple reducers can be added easily
 */
export const storeWithToolkit = configureStore({
  reducer: {
    todos: todosReducer,
    apiData: apiDataReducer
  },
});

export * from './todo.reducer'