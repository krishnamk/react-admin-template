import React from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalProvider} from "./context/GlobalContext";

function App() {

  return (
      <GlobalProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
