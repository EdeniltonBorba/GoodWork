import React from "react";
import { Link } from "react-router-dom";

const logoHomeStyle = {
    fontfamily: 'Prompt',
    fontSize: 40,
    color: "white",
};

const logoSignStyle = {
    color: 'white',
    backgroundColor: 'brown',
    textAlign: "center",
};



export function LogoHome() {
    return (<Link to="/Home">
        <div style={logoHomeStyle}>GoodWork</div>
    </Link>
    );
};

export function LogoSign() {
    return <h1 style={logoSignStyle}>GoodWork</h1>;

}

export function LogoOpening() {
    return <div style={logoHomeStyle}>GoodWork</div>;

}


