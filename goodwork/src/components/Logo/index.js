import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";


function Logo(props) {
    return <Link to="/Home">
        <div className="logo">
            GoodWork
        </div>
    </Link>;
}

export default Logo;