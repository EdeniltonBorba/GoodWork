import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../../components/Logo/Logo';

function Welcome() {
    return (
        <div>
            <AppBar className="" position="static">
                <Toolbar>
                    <Typography className="" variant="h6">
                        <LogoOpening />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Welcome;
