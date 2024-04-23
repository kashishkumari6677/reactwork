import React from "react";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Component/nav";
import Home from "./pages/Home"
import About from './pages/About'
import Book from './pages/Book'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
let Web=()=>{
  return(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<><Nav/><Home/></>} />
  <Route path="/About" element={<><Nav/><About/></>} />
  <Route path="/Book" element={<><Nav/><Book/></>} />
  <Route path="/Portfolio" element={<><Nav/><Portfolio/></>} />
  <Route path="/Contact" element={<><Nav/><Contact/></>} />
  </Routes>
  </BrowserRouter>
 )
}
export default Web
