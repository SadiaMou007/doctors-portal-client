import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NavBar from "./pages/Shared/NavBar";

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
