import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { persistor } from "./app/store.js";
import store from "./app/store.js";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);