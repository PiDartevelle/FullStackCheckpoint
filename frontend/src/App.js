import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FormPage from "./pages/formPage";
import { TodoDetails } from "./components/TodoDetails";
import BtnToggle from "./components/BtnToggle/BtnToggle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BtnToggle />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/formPage" element={<FormPage />}></Route>
            <Route path="/todos/:id" element={<TodoDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
