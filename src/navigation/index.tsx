import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import pages
import Home from "../pages/Home";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Login from "../pages/Authentications/Login";
import Signup from "../pages/Authentications/Signup";
import ForgotPassword from "../pages/Authentications/ForgotPassword";
import PasswordReset from "../pages/Authentications/PasswordReset";
import ChatPage from "../pages/Chat/index";

function Navigation(): React.JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/forgot-password" Component={ForgotPassword} />
          <Route path="/reset-password" Component={PasswordReset} />
          <Route path="/chat" Component={ChatPage}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Navigation;
