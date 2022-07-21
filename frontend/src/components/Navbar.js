import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> Todo List</h1>
        </Link>
        <Link to="/FormPage">
          <h4>Add a Todo</h4>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
