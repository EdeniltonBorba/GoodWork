import React from "react";
import Background from './thanks.jpg';
import "./img.css"


export default () => <div className="familyRoot">
    <img className="familyImage" src={Background} />
    <div className="thanksBox">
        <div className="familyText"> Thank you, it was a pleasure to have you here, soon we will return your request!</div>
    </div>
</div>


