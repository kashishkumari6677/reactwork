import React,{useState} from "react";
import { motion } from "framer-motion";
import "./nav.css"
import { Link } from "react-router-dom";
import Icon from '../media/menu.png'
import img1 from '../media/face.png'
import img2 from '../media/git.png'
import img3 from '../media/inst.png'
import img4 from '../media/twitter (1).png'
let Nav = () => {
    let [show,hide]=useState(false)
    return (<nav>
        <div className="logo">
            <h1>A</h1>
        </div>
        <div className="menu">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/book'>Book</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className= {show?"parag show":"parag"}>
        < div className="icon" onClick={()=>{hide(!show)}}>
            <img src={Icon}/>
        </div>
            <ul>
                <li><img src={img1} /></li>
                <li><img src={img2} /></li>
                <li><img src={img3} /></li>
                <li><img src={img4} /></li>
            </ul>
        </div>
    </nav>)
}
export default Nav
