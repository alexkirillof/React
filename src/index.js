import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { Router } from "./components/Router/index.js";
import { PersistGate } from "redux-persist/integration/react";
import {persistor,store} from "./store/index.js";


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Router />
        </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


