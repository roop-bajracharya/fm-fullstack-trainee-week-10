import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";

// import AppReduxOnly from "./redux-only/App";
import AppReduxToolkit from "./redux-with-toolkit/App";
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