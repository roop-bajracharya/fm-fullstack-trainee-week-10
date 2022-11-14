import * as Redux from "redux";
import { nanoid } from "@reduxjs/toolkit";

// ACTIONS TYPES
const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

// ACTIONS
export const addTodo = (text) => ({
  type: ADD_TODO, // ACTION_TYPE
  payload: { text, id: nanoid() }, // PAYLOAD
});

export const todoToggled = (id) => ({
  type: TODO_TOGGLED,
  payload: id,
});

// REDUCER
export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    case TODO_TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

export const storeWithoutToolKit = Redux.createStore(todosReducer);

export const todoSelector = (state) => state;
