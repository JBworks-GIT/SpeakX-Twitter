import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />}>
      </Route>
      <Route path="Login" element={<Login />} ></Route>
    </Routes>
  </BrowserRouter>
);
