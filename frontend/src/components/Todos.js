import { useTodosContext } from "../hooks/useTodosContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";

const Todos = ({ todo }) => {
  const { dispatch } = useTodosContext();

  const handleClick = async () => {
    const response = await fetch("/api/todos/" + todo._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };
  return (
    <div className="todo-details">
      <Link to={`/todos/${todo._id}`}>
        <h4>{todo.title}</h4>
      </Link>

      <p>({todo.author})</p>
      <p>Details: {todo.content}</p>
      <p>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default Todos;
