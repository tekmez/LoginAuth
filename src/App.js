import React from "react";
import Hello from "./Pages/HelloPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Store from './Pages/StorePage';
import Login from "./AuthModules/Components/LoginForm";
import Register from "./AuthModules/Components/RegisterForm";
import './index.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
