import { useContext, useEffect } from "react";
import Todo from "../components/Todos";
import { ThemeContext } from "../context/ThemeContext";
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
  }, [dispatch, todos]);
  return (
    <div className={"home"}>
      <div className="todos">
        {todos &&
          todos.map((todo) => (
            <Todo key={todo._id} todo={todo} id={todo._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
