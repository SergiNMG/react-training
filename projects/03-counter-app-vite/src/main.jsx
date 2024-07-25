import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App";
import { CounterApp } from "./CounterApp";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={3}></CounterApp>
  </React.StrictMode>
);
