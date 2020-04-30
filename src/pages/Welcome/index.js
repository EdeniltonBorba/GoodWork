import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../../components/Logo/Logo';
import "./styles.css";

function Welcome() {
    return (
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <LogoOpening />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Welcome;
