import React from "react";
import Port from '../media/portfolio.jpg'
let Portfolio=()=>{
    return(<div className="portfolio">
        <div className="project">
            <h1>portfolio.</h1>
            <h5>Check out some of my latest UI/UX design case studies.</h5>
            <p>I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.</p>
        </div>
         <div className="port">
            <img src={Port}/>
         </div>
    </div>)
}
export default Portfolio