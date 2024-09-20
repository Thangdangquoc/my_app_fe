import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Authen from "../../../services/userService";

const Login = (props) => {
  const history = useHistory();

  const handleCreateNewAccount = () => {
    history.push("/register");
  };
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const defaultObjValidInput = {
    isValidValueLogin: true,
    isValidValuePassword: true,
  };
  const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);
  const handleLogin = async () => {
    setObjValidInput(defaultObjValidInput);
    if (!valueLogin) {
      setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false });
      toast.error("Please enter email address or phone number!");
      return;
    }
    if (!password) {
      setObjValidInput({
        ...defaultObjValidInput,
        isValidValuePassword: false,
      });
      toast.error("Please enter password!");
      return;
    }

    let response = await Authen.loginUser(valueLogin, password);
    console.log("resphone", response.data);
    if (response && response.data && response.data.status == 0) {
      let data = response.data.object;
      sessionStorage.setItem("account", JSON.stringify(data));
      history.push("/");
      toast.success("Login success!!");
      window.location.reload();
    }
    if (response && response.data && response.data.status == 403) {
      toast.error("Login fail!Check Email or password");
      // history.push("/login");
      return;
    }
  };
  const handlePressEnter = (event) => {
    // console.log("check cahrcode:", event);
    if (event.charCode == 13) {
      handleLogin();
    }
  };
  return (
    <div className="login-contaniner">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">My Account</div>
            <div className="detail">
              Devmenter helps ypu connect and share study English
            </div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">My Account</div>
            <input
              type="text"
              className={
                objValidInput.isValidValueLogin
                  ? "form-control"
                  : "is-invalid form-control"
              }
              placeholder="Email or your phone number"
              value={valueLogin}
              onChange={(event) => {
                setValueLogin(event.target.value);
              }}
            />
            <input
              type="password"
              className={
                objValidInput.isValidValuePassword
                  ? "form-control"
                  : "is-invalid form-control"
              }
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyPress={(event) => handlePressEnter(event)}
            />
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Login
            </button>
            <span className="text-center">
              <a className="forgot-password" href="#">
                Forgot your password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleCreateNewAccount()}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
