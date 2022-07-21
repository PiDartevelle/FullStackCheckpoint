import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTodosContext } from "../hooks/useTodosContext";
import "../index.css";

export const TodoDetails = () => {
  const { dispatch } = useTodosContext();
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`/api/todos/${id}`);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
        setTodo(json);
      }
      console.log(todo);
    };
    fetchTodos();
  }, []);
  return (
    <div className="detailed-todo">
      <h1>{todo.title}</h1>
      <h3>{todo.author}</h3>
      <p>{todo.content}</p>
    </div>
  );
};
