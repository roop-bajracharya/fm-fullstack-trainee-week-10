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
  console.log("state", state, action);
  switch (action.type) {
    case ADD_TODO:
      console.log("action", action);
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    case TODO_TOGGLED:
      return state.map((todo) => {
        console.log('found not', todo.id, action.payload, todo.id !== action.payload.id);
        if (todo.id !== action.payload.id) return todo;
        console.log('found', todo.id, action.payload);
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
