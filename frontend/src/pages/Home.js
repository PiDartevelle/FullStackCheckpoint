import { useEffect } from "react";
import TodoForm from "../components/AddTodoForm";
import TodoDetails from "../components/TodoDetails";
import { useTodosContext } from "../hooks/useTodosContext";

const Home = () => {
  const { todos, dispatch } = useTodosContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };
    fetchTodos();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="todos">
        {todos &&
          todos.map((todo) => <TodoDetails key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Home;
