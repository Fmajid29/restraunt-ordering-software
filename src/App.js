import React from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route 
    path="/login"
    element={<Login /> }
    />
      <Route 
    path="/dashboard"
    element={<Dashboard /> }
    />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
