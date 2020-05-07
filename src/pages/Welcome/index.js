import React from "react";
import AppBar from '../../components/AppBar/AppBar.js';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../../components/Logo/Logo';
import "./styles.css";
import { Container } from "../../components/Grid";

function Welcome() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <LogoOpening />
                </Toolbar>
            </AppBar>
            <main>
                <div className="">
                    <Container maxWidth="sm">
                        <Typography>

                        </Typography>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}
export default Welcome;
