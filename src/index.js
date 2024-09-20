import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./views/User/User";
import Admin from "./views/Admin/Admin";
import Blog from "./views/Blog/Blog";
import HomePage from "./views/Home/HomePage";
import ManageUser from "./views/Admin/Content/ManageUser";
import Dashboard from "./views/Admin/Content/DashBoard";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
