import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

import { storeWithToolkit } from ".";

// TODO SLICE
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      // we can mutate the state like normal but
      // but under the hood redux toolkit return a new state
      state.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
  },
});

/**
 * Actions can be extracted from the slice
 * Action Types will be of format
 * `sliceName/reducerName`
 * `todos/addTodo`
 * `todos/todoToggled`
 */
export const { todoToggled, addTodo } = todosSlice.actions;

/**
 * Reducers are also extracted from slice
 */
export const todosReducer = todosSlice.reducer;

// RootState
export const rootState = () => storeWithToolkit.getState();

/**
 * createSelector manages memoization for the state
 */
export const selectTodos = createSelector(rootState, (state) => {
  return state.todos;
});

export const selectStats = createSelector(selectTodos, (state) => {
  const doneTodos = state.filter((todo) => todo.completed);
  return {
    done: doneTodos?.length,
    remaining: state.length - doneTodos.length,
  };
});
