import React from "react";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'
import Projects from './pages/Projects'
let Data=()=>{
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<><Nav/><Home/></>} />
    <Route path="/Skills" element={<><Nav/><Skills/></>} />
    <Route path="/About" element={<><Nav/><About/></>} />
    <Route path="/Projects" element={<><Nav/><Projects/></>} />
  </Routes>
  </BrowserRouter>
  </>)
}
export default Data