const TodoDetails = ({ todo }) => {
  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>Author: {todo.author}</p>
      <p>Todo: {todo.content}</p>
    </div>
  );
};

export default TodoDetails;
