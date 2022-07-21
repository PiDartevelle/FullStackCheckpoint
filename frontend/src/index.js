import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodosContextProvider } from "./context/TodosContext";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
