import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw Error("Context must be used inside conxtex provider");
  }
  return context;
};
