import React from "react";
import Login from "./Components/Login";
import Tables from "./Components/Tables/Tables";
import Navbar from "./Components/Common Components/Navbar/Navbar";
import Category from "./Components/Category";
import Bill from "./Components/Bill";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
