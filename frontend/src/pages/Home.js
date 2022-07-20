import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "../components/AddTodoForm";
import TodoDetails from "../components/TodoDetails";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      await axios.get("/api/todos").then((res) => setTodos(res.data));
    };
    fetchTodos();
  }, []);
  return (
    <div className="home">
      <div className="todos">
        {todos &&
          todos.map((todo) => <TodoDetails key={todo._id} todo={todo} />)}
      </div>
      <TodoForm />
    </div>
  );
};

export default Home;
