import React from "react";
import Background from './family.jpg';
import "./img.css"
import ButtonRegister from '../ButtonRegister/ButtonRegister.js';

export default () => <div className="familyRoot">
    <img className="familyImage" src={Background} />
    <div className="familyTextOne">
        <h1>Start Tasking.</h1>
    </div>
    <div className="familyTextTwo">
        <h2>Earn money your way.</h2>
    </div>
    <div className="familyTexThree">
        <h3>Be someone's hero today. Earn money by helping people with their everyday to-dos.</h3>
    </div>
    <div className="btnRegister">
        <ButtonRegister />
    </div>
</div >