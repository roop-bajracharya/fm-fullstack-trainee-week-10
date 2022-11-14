import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../App.css";

import { addTodo, selectTodos, todoToggled } from "../redux-with-toolkit/store";
import { ApiData } from "./components/ApiData";
import { Stats } from "./components/Stats";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    if (e.target.value) {
      setText(e.target.value);
    } else {
      setText("");
    }
  };

  return (
    <div className="App">
      <h2>Add Todos</h2>
      <input onChange={handleChange} name="text" value={text || ""} />
      <button
        title="Add"
        onClick={() => {
          if (text) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Add
      </button>
      <div className="todo-container">
        <div>
          <h2>TODOS</h2>
          {todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <span> </span>
              <span>
                <b>{todo.completed ? "Done" : "Remaining"}</b>
              </span>
              <span> </span>
              <button
                onClick={() => {
                  dispatch(todoToggled(todo));
                }}
              >
                Toggle Status
              </button>
            </div>
          ))}
        </div>
        <div>
          <Stats />
        </div>
      </div>
      {/* <ApiData /> */}
    </div>
  );
}

export default App;
