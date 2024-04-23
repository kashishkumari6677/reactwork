import React from "react";
import Picture from '../media/adham.jpg'
let Home=()=>{
    return(
    <div className="MainDiv">
       <div className="design">
        <h1>Designer</h1>
        <p>designerProduct designer specialising in UI design and design systems.</p>
       </div>
       <div className="pic">
       <img src={Picture}/>
       </div>
       <div className="design">
        <h1>Coder</h1>
        <p>Front end developer who writes clean, elegant and efficient code.</p>
       </div>
    </div>)
}
export default Home