import React from "react";
import Background from './family.jpg';
import "./img.css"
import { Link } from "react-router-dom";


export default () => <div>
    <div className="homeRoot">
        <div className="homeImage" />
        <div className="homeBox">
            <div className="homeText"><span class="customHelp">Help</span> around the home, at your fingertips</div>
        </div>
    </div>
    <div className="homeSubtitle">
        <div className="mainTitle">
            You don't always have to DIY. Get help from thousands of trusted Taskers for everything from home repairs to cleaning.

        </div>
        <div className="homeCtas">
            <Link to="/SignIn"><button className="buttonSign">Sign In</button></Link><Link to="/SignUp"> <button className="buttonSign">Sign Up</button></Link>

        </div>

    </div>
</div>



