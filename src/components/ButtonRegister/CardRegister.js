import React from "react";
import Background from './register.jpg';
import "./img.css"
import { Link } from "react-router-dom";
import ButtonRegister from "./ButtonRegister.js";

export default () => <div>
    <div className="homeRoot">
        <div className="RegisterImage" />
        <div className="homeBox">
            <div className="subBox">
                <div className="mainTitle">
                    <div className="TextOne">
                        <h1> <span className="textSubOne">Start</span> Tasking.</h1>
                    </div>
                    <div className="TextTwo">
                        <h2> Earn <span className="TextSubTwo">money</span> your way.</h2>
                    </div>
                    <div className="Textthree">
                        <h3> Be someone's hero today. Earn money by helping <span className="textSubThree">people</span> with their everyday to-dos.</h3>
                    </div>
                </div>
                <ButtonRegister />
            </div>
        </div>



    </div>
</div>
