//=============React Elements=============//
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Login = ({ updateLoginStatus, updateLocalUser }) => {
  const history = useHistory();

  const [showInvalid, setShowInvalid] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    submitLoginRequest(username, password);
  };

  const submitLoginRequest = (username, password) => {
    fetch("/api/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          let user = await res.json();

          updateLoginStatus(true);
          updateLocalUser(user.result[0]);
          history.push("/");
        } else if (res.status === 401) {
          setShowInvalid(true);
        } else {
          console.log("error logging in");
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
        <div className="title">Welcome Back!</div>
        <div className="subtitle">Thank you for using our trading service</div>
        {showInvalid && (
          <div className="invalid-credentials">
            The login credentials you entered are invalid.
          </div>
        )}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="button">
            <input type="submit" value="Login" />
          </div>
        </form>
        <div className="new-user">
          New User? <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
