import React from "react";
import Background from './register.jpg';
import "./img.css"
import { Link } from "react-router-dom";
import ButtonRegister from "./ButtonRegister.js";

export default () => <div>
    <div className="homeRoot">
        <div className="RegisterImage" />
        <div className="homeBox">
            <div className="mainTitle">
                <div className="TextOne">
                    <h1> Start Tasking.</h1>
                </div>
                <div className="TextTwo">
                    <h2> Earn money your way.</h2>
                </div>
                <div className="Textthree">
                    <h3> Be someone's hero today. Earn money by helping people with their everyday to-dos.</h3>
                </div>
            </div>
        </div>

        <ButtonRegister />

    </div>
</div>
