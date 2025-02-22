import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Signup from "./pages/auth/signUp";
import Signin from "./pages/auth/signIn";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signUp" element={<Signup />} />
        <Route path="/auth/signIn" element={<Signin />} />
        <Route path="/newsFeed" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
