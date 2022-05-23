import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import NavBar from "./pages/Shared/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReviews from "./pages/Dashboard/MyReviews";
import Users from "./pages/Dashboard/Users";
import RequireAdmin from "./pages/Login/RequireAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctor from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="dashboard/payment/:id" element={<Payment />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReviews></MyReviews>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctor />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
