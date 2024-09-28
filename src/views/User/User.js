import SideBarUser from "./SideBarUser.js";
import "./User.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const User = () => {
  const [collapsed, setCollaped] = useState(false);
  return (
    <div className="user-container">
      <div className="user-sidebar">
        <SideBarUser collapsed={collapsed} />
      </div>
      <div className="user-content">
        <div className="user-header">
          {" "}
          <FaBars
            onClick={() => {
              setCollaped(!collapsed);
            }}
          />
        </div>
        <div className="user-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default User;
