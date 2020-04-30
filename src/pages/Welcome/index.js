import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../../components/Logo/Logo';
import "./styles.css";
import { Container } from "../../components/Grid";

function Welcome() {
    return (
        <React.Fragment>
            <AppBar position="relative" className="navBar">
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
