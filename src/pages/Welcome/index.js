import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../../components/Logo/Logo';
import {
    AppBar,
    WelcomeRoot,
    WelcomeImage,
    WelcomeBox,
    WelcomeText,
    WelcomeSubtitle,
    MainTitle,
    ButtonSign
} from "./styles";
import { Container } from "../../components/Grid";
import { Link } from "react-router-dom";


function Welcome() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <LogoOpening />
                </Toolbar>
            </AppBar>
            <div>
                <Typography>
                    <WelcomeRoot>
                        <WelcomeImage />
                        <WelcomeBox>
                            <div>
                                <WelcomeText>
                                    <span>Help</span> around the home, at your fingertips
                                        </WelcomeText>
                            </div>

                        </WelcomeBox>
                    </WelcomeRoot>
                </Typography>
            </div>
            <WelcomeSubtitle>
                <MainTitle>
                    You don't always have to DIY. Get help from thousands of trusted Taskers for everything from home repairs to cleaning.
                </MainTitle>
            </WelcomeSubtitle>
            <ButtonSign>
                <Link to="/SignIn"><button>Sign In</button></Link><Link to="/SignUp"> <button>Sign Up</button></Link>
            </ButtonSign>
        </React.Fragment >
    )
}
export default Welcome;
