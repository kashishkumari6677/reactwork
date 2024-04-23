import React from "react";
import Image from '../media/2img.jpg'
let About=()=>{
    return(<div className="about">
     <div className="info">
        <h1>about.</h1>
       <h5>I'm a product designer based in sunny Sydney, Australia.</h5>
       <p>Since 2005, I've enjoyed turning complex<br/> problems into simple, beautiful and intuitive<br/> designs. When I'm not pushing pixels, you'll find me cooking,<br/> gardening or working out in the park.</p>
     </div>
     <div className="image">
        <img src={Image} />
     </div>
    </div>
    )
}
export default About