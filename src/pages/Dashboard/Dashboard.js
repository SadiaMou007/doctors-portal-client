import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl text-secondary my-4 text-center">
          Welcome to Your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-200 rounded  text-base-content">
          {/* <!-- Sidebar content here -->*/}
          <li>
            <Link to={"/dashboard"}>My Appointments</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>My Reviews</Link>
          </li>
          <li>{admin && <Link to={"/dashboard/users"}>Make Admin</Link>}</li>
          <li>
            {admin && <Link to={"/dashboard/addDoctor"}>Add Doctor</Link>}
          </li>
          <li>
            {admin && <Link to={"/dashboard/manageDoctor"}>Manage Doctor</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
