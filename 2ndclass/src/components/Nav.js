import React,{useState} from "react";
import './Nav.css'
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import imgLogo from '../media/stack-removebg-preview (1).png'
import close from '../media/close (1).png'
let Nav=()=>{
    let [show,hide]=useState(false)
    let variant={slideLeft:{
  y:0,
  opacity:1,
  scale:1
    }
  ,slideRight:{
    opacity:0,
    y:-200,
    scale:0
  }}
    return(<nav>
      <div className="logo" onClick={()=>{hide(!show)}}>
      <motion.img initial={{
        scale:0.5,
        opacity:0.5
      }} 
      transition={{
       duration:1,
       repeat:Infinity,
       repeatType:"loop"
      }}
        src={imgLogo}/>
      </div>
      <motion.div 
      animate={show?"slideLeft":"slideRight"}
      transition={{duration:0.5}}
      variants={variant}
      className="menu">
        <div className="closeicon" onClick={()=>{hide(!show)}}>
        <img src={close}/>
        </div>
      <ul>
       <li><Link to='/'>HOME</Link></li>
       <li><Link to='/Skills'>SKILLS</Link></li>
       <li><Link to='/About'>ABOUT</Link></li>
       <li><Link to='/Projects'>PROJECTS</Link></li>
       </ul>
       </motion.div>
    </nav>
    )
}
export default Nav