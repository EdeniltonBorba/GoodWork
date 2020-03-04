import React from "react";
import Background from './family.jpg';
import "./img.css"
import { Link } from "react-router-dom";

export default () => <div className="familyRoot">
    <img className="familyImage" src={Background} />
    <div className="familyText"> Thanks!<Link to="/SignIn"><button className="buttonSignIn">SIGN IN</button></Link><button className="buttonSignUp">SIGN UP</button></div>
</div>

