//=============React Elements=============//
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//=============Components=============//
import Homepage from "./Home/Homepage";
import ScrollToTop from "./utilities/ScrollToTop";
// import PrivateRoute from "./OtherComponents/PrivateRoute";
import Events from "./Events/Events";
import Example from "./Example/Example";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";

const loginStatus = true;

const App = () => {
  return (
    <BrowserRouter>
      <Header className="header" loginStatus={loginStatus} />
      {/* Used to ensure each page loads at the top */}
      <ScrollToTop />

      <Switch className="content">
        {/* Normal Navagation Routes */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/example2" component={Example} />

        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Footer className="footer" />
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
