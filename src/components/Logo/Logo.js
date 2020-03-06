import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


import "./logo.css";

const useStyles = makeStyles(theme => ({
    logoHomeStyle: {
        fontFamily: 'Prompt',
        fontSize: 40,
        color: "white"
    },
    logoSignStyle: {
        color: 'white',
        backgroundColor: 'brown',
        textAlign: "center",
        fontSize: '100%',
        fontWeight: "normal",
        padding: '5px',
        fontSize: '100px',
    },
}));

export function LogoHome() {
    const classes = useStyles();
    return (<Link to="/Home">
        <div className="logoHomeStyle">GoodWork</div>
    </Link>
    );
};

export const LogoSign = () => {
    const classes = useStyles();
    return <div className={classes.logoSignStyle}><p>GoodWork</p></div>;

}

export function LogoOpening() {
    const classes = useStyles();
    return <div className={classes.logoHomeStyle}>GoodWork</div>;

}


