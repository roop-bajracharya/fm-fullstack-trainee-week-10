import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppReduxOnly from "./redux-only/App";
import AppReduxToolkit from "./redux-with-toolkit/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { storeWithoutToolKit } from "./store";
import { storeWithToolkit } from "./redux-with-toolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={storeWithoutToolKit}>
      <App />
    </Provider> */}

    <Provider store={storeWithToolkit}>
      <AppReduxToolkit />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
