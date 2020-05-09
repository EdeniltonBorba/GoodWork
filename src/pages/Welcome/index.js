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
    CustomHelp,
    HomeSubtitle,
    MainTitle
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
            <main>
                <div className="">
                    <Container maxWidth="sm">
                        <Typography>
                            <WelcomeRoot>
                                <WelcomeImage />
                                <WelcomeBox>
                                    <WelcomeText>
                                        <div><span className={`${CustomHelp}`}>Help</span> around the home, at your fingertips</div>
                                    </WelcomeText>
                                </WelcomeBox>
                            </WelcomeRoot>
                            <HomeSubtitle>
                                <MainTitle>
                                    You don't always have to DIY. Get help from thousands of trusted Taskers for everything from home repairs to cleaning.
                                    </MainTitle>
                            </HomeSubtitle>

                            <div className="homeCtas">
                                <Link to="/SignIn"><button className="buttonSign">Sign In</button></Link><Link to="/SignUp"> <button className="buttonSign">Sign Up</button></Link>
                            </div>


                        </Typography>
                    </Container>
                </div>
            </main >
        </React.Fragment >
    )
}
export default Welcome;
