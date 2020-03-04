import React from "react";
import Background from './family.jpg';
import "./img.css"
import ButtonRegister from '../ButtonRegister/ButtonRegister.js';

export default () => <div className="familyRoot">
    <img className="familyImage" src={Background} />
    <div className="familyText"> Thanks!</div>
    <ButtonRegister className="buttonRegister" />
</div>