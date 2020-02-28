import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";


export function LogoHome() {
    return (<Link to="/Home">
        <div className="LogoHome">
            GoodWork
           </div>
    </Link>
    );
};

export function LogoSign() {
    return (
        <div className="LogoSign">
            GoodWork
             </div>
    )
}


