//=============React Elements=============//
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//=============Components=============//
import Homepage from "./Home/Homepage";
import ScrollToTop from "./utilities/ScrollToTop";
import PrivateRoute from "./OtherComponents/PrivateRoute";
import EventPage from "./Events/EventPage";
import CreateEvent from "./CreateEvent/CreateEvent";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import SignUp from "./SignUp/SignUp";

export const defaultUser = [
  {
    username: "",
    password: "",
    country: "",
    date_of_birth: "",
    first_name: "",
    last_name: "",
    email: "",
    host: false,
    host_name: "",
  },
];

const App = () => {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus") === "true"
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) !== null
      ? JSON.parse(localStorage.getItem("user"))
      : defaultUser
  );

  const updateLoginStatus = (value) => {
    localStorage.setItem("loginStatus", JSON.stringify(value));
    setLoginStatus(value);
    console.log(localStorage.getItem("loginStatus"));
  };

  const updateLocalUser = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log(localStorage.getItem("user"));
    setUser(newUser);
  };

  function withProps(Component, props) {
    return function (matchProps) {
      return <Component {...props} {...matchProps} />;
    };
  }
  return (
    <BrowserRouter>
      <Header className="header" loginStatus={loginStatus} />
      {/* Used to ensure each page loads at the top */}
      <ScrollToTop />

      <Switch className="content">
        {/* Normal Navagation Routes */}

        <Route exact path="/" component={Homepage} />
        <Route exact path="/events" component={EventPage} />

        <Route path="/signup" component={SignUp} />
        <Route
          path="/login"
          component={withProps(Login, { updateLoginStatus, updateLocalUser })}
        />
        <Route exact path="/createevent" component={CreateEvent} />
        <Route exact path="/example2" component={EventPage} />

        <PrivateRoute
          redirect_url="/login"
          loginStatus={loginStatus}
          path="/logout"
          component={withProps(Logout, {
            loginStatus,
            updateLoginStatus,
            updateLocalUser,
          })}
        />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Footer className="footer" />
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
