import React from "react";
import Home from "./components/Home";
import Cources from "./components/Cources";
import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import Abouts from "./components/Abouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cource" element={<Cources />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Abouts" element={<Abouts />} />
      </Routes>
    </>
  );
}

export default App;
