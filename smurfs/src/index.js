import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
