import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Update from "./Pages/Update";
import EditData from "./Pages/EditData";
import LogOut from "./Pages/LogOut";
import LoginForm from "./Pages/LoginForm";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    console.log("Dashboard Loaded!");
    alert("Welcome to the Dashboard!");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/display" element={<Display />} />
            <Route path="/search" element={<Search />} />
            <Route path="/update" element={<Update />} />
            <Route path="/editdata/:id" element={<EditData />} />
          </Route>
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
