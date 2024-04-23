import React from "react";
import Photo from '../media/book.jpg'
let Book=()=>{
    return(<div className="mainBook">
        <div className="book">
         <h5>UI DESIGN</h5>
         <h1>book.</h1>
         <p>Learn a logic-driven approach to design intuitive, accessible, and beautiful interfaces using quick and practical guidelines.</p>
         <button>GET THE BOOK</button>
        </div>
        <div className="photo">
         <img src={Photo}/>
        </div>
    </div>)
}
export default Book