import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = useTodosContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = { title, author, content };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setAuthor("");
      setContent("");
      console.log("new todo added:", json);
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Todo</h3>

      <label>Todo Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Todo Author</label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />

      <label>Todo Content</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <button>Add Todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;
