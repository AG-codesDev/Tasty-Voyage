import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.js";
import App from "./src/App.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
