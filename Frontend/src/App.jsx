import React from "react";
import Home from "./components/Home";
import Cources from "./components/Cources";
import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import Abouts from "./components/Abouts";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function App() {
  const [AuthUser, setAuthUseer] = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Cource"
          element={AuthUser ? <Cources /> : <Navigate to="/Signup" />}
        />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Abouts" element={<Abouts />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
