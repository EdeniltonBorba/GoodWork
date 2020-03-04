import React from "react";
import Background from './family.jpg';
import "./img.css"
import { Link } from "react-router-dom";

export default () => <div className="familyRoot">
    <img className="familyImage" src={Background} />
    <div className="familyText">Help around the home, at your fingertips</div>
    <div className="familyTextSign">You don't always have to DIY. Get help from thousands of trusted Taskers for everything from home repairs to cleaning.</div>
    <Link to="/SignIn"><button className="buttonSignIn">SIGN IN</button></Link><button className="buttonSignUp">SIGN UP</button>
</div>


