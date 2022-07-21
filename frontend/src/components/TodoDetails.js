import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTodosContext } from "../hooks/useTodosContext";

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
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.author}</h1>
      <h1>{todo.content}</h1>
    </div>
  );
};
