import React from "react";
import Cont from '../media/adham.jpg'
import Twitter from '../media/twitter.png'
import Facebook from '../media/facebook (6).png'
import Linkin from '../media/linkedin.png'
import Insta from '../media/instagram (7).png'

let Contact = () => {
    return (<div className="contact">
        <div className="touch">
            <h1>contact.</h1>
            <p>Get in touch with me via social media or email.</p>
            <div className="twit">
                <a href="#">
                    <div className="icon">
                        <img src={Twitter} />
                        </div>
                    <h2 className="twt">Twitter</h2>
                </a>
                <a href="#">
                    <div className="icon"><img src={Facebook} /></div>
                    <h2 className="face">Facebook</h2>
                </a>
                <a href="#">
                    <div className="icon"><img src={Linkin} /></div>
                    <h2 className="linked">linkedin</h2>
                </a>
                <a href="#">
                    <div className="icon"><img src={Insta} /></div>
                   <h2 className="inst">Instagram</h2>
                </a>
            </div>
        </div>
        <div className="profile">
            <img src={Cont} />
        </div>
    </div>)
}
export default Contact
