import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTodosContext } from "../hooks/useTodosContext";
import "../index.css";

export const TodoDetails = () => {
  const { dispatch } = useTodosContext();
  const { id } = useParams();
  const [todo, setTodo] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [error, setError] = useState(null);

  // fetching the one Todo before updating //
  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`/api/todos/${id}`);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
        setTodo(json);
      }
    };
    fetchTodo();
  }, [dispatch, id, todo]);

  // Update todo //

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const todo = { title, author, content };
    const response = await fetch("/api/todos/" + id, {
      method: "PATCH",
      body: JSON.stringify(todo),
    });
    console.log(JSON.stringify(todo));
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setAuthor("");
      setContent("");
      console.log("new todo updated:", json);
      dispatch({ type: "UPDATE_TODO", payload: json });
    }
  };
  return (
    <>
      <form className="todo-update" onSubmit={handleUpdateSubmit}>
        <h3>Update todo</h3>

        <label>Todo Title</label>
        <input
          placeholder={todo.title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Todo Author</label>
        <input
          placeholder={todo.author}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />

        <label>Todo Content</label>
        <input
          placeholder={todo.content}
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <button>Update todo</button>
      </form>
    </>
  );
};
