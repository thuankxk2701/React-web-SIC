import React from "react";
import SignIn from "./components/login/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/login/SignUp";
import Home from "./components/views/Home";
import ForgotPassword from "./components/login/ForgotPassword";

import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/login/createAccount" component={SignUp} />
        <Route exact path="/login/forgotPassword" component={ForgotPassword} />
      </Switch>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
};

export default App;
