import React from "react";
import { motion } from 'framer-motion'
import img1 from '../media/coffee (1).png'
import img2 from '../media/toast.png'
import img3 from '../media/bomb.png'
import img4 from '../media/pestle.png'
import kattle from '../media/kattle.jpeg'
import prd1 from '../media/product-1.jpeg'
import prd2 from '../media/product-2.jpeg'
import prd3 from '../media/product-3.jpeg'
import location from '../media/placeholder.png'
import email from '../media/email (1).png'
import tele from '../media/call.png'
import insta from '../media/instagram (7).png'
import facebook from '../media/facebook (6).png'
import twitter from '../media/twitter (1).png'
let Home=()=>{
    return(<>
    <header>
    <div className="home">
      <motion.h3 
      animate={{x:[600,-100,40,0],opacity:[0,0.5,1]}}
      transition={{duration:4,
      }}
      >Over One Hundred Flavors Of</motion.h3>
      <motion.h1
      animate={{x:[-600,100,30,0],opacity:[0,0.5,1]}}
      transition={{duration:4}}
      >SPECIALLY <br/>CRAFTED TEA</motion.h1>
      <motion.button
       animate={{opacity:[0,0.3,0.5,1],scale:[1.5,1.4,1.3,1.2,1.1,0.5,1]}}
       transition={{
        duration:3,
       }}
       
      className="btn banner-btn">EXPLORE</motion.button>
    </div>
    
   </header>

     <div className="wine">
      <div className="energy">
       <img src={img1}/>
       <h4>Made In US</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?</p>
      </div>
      <div className="energy">
       <img src={img2}/>
       <h4>Relaxation</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?</p>
      </div>
      <div className="energy">
       <img src={img3}/>
       <h4>Energy</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?</p>
      </div>
      <div className="energy">
       <img src={img4}/>
       <h4>Family Recipe</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?</p>
      </div>
     </div>
   <div className="tea">
    <div className="kattle">
 <img src={kattle}/>
 </div>
 <div className="station">
<h2>about our</h2>
<h1>Tea Station</h1>
<p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus reprehenderit iure, vero nobis dolore!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus reprehenderit iure, vero nobis dolore!</p>
<button>LEARN MORE</button>
 </div>
</div>
 <div className="check"> 
  <div className="products">
    <h2>Check Out</h2>
    <h1>Our Products</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem, repellat praesentium esse ducimus odit alias nulla laborum doloremque voluptatum, a cum magnam iure accusamus.</p>
    <button>INVENTORY</button>
  </div>
  <div className="card">
    <img src={prd1}/>
    <h3>Ginger Peach Tea</h3>
    <h4>$6.99</h4>
  </div>
  <div className="card">
    <img src={prd2}/>
    <h3>Fruit Sangria</h3>
    <h4>$6.99</h4>
  </div>
  <div className="card">
    <img src={prd3}/>
    <h3>White Tea</h3>
    <h4>$6.99</h4>
  </div>
 </div>
    <div className="explore">
      <h2>Explore</h2>
      <h1>OUR SERVICES</h1>
    </div>
   <div className="dlvry">
    <div className="custom">
      <img src={prd1}/>
      <h4>Custom Recipes</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque.</p>
      <button>READ MORE</button>
    </div>
    <div className="custom">
      <img src={prd2}/>
      <h4>Home Delivery</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque.</p>
      <button>READ MORE</button>
    </div>
    <div className="custom">
      <img src={prd3}/>
      <h4>Tea Aging</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque.</p>
      <button>READ MORE</button>
    </div>
   </div>
    <form>
      <div className="formCrd">
        <div className="address">
          <h3><img src={location}/>Address</h3>
          <h4>523 N FAIRFAX AVE<br/>LOS ANGELES, CA 90048</h4>
          <h3><img src={email}/>Email</h3>
          <h4>EMAIL@EMAIL.COM</h4>
          <h3><img src={tele}/>Telephone</h3>
          <h4>+ 123 456 789</h4>
        </div>
        <div className="information">
         <h1>Contact US</h1>
         <input type="text" placeholder="Name"></input>
         <input type="email" placeholder="Email"></input>
         <textarea  cols="56" rows="6" placeholder="Message"></textarea>     
         <button>SUBMIT HERE</button>
        </div>
      </div>
      </form>
         <footer>
          <div className="foot">
            <div className="icons">
           <img src={facebook}/>
           <img src={twitter}/>
           <img src={insta}/>
          </div>
          <div className="copy">
            <h4>&copy;2024 <span> TEA STATION </span> ALL RIGHTS RESERVED</h4>
          </div>
          </div> 
         </footer>
         </>
  )}
export default Home