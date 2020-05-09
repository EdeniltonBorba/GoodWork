import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../../components/Logo/Logo';
import { AppBar, } from "./styles";
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
                            <div className="HomeRoot">
                                <img className="HomeImage" src="./assets/image/family.jpg" alt="Card-img-cap" />
                                <div className="homeBox">
                                    <div className="homeText"><span class="customHelp">Help</span> around the home, at your fingertips</div>
                                </div>
                            </div>
                            <div className="homeSubtitle">
                                <div className="mainTitle">
                                    You don't always have to DIY. Get help from thousands of trusted Taskers for everything from home repairs to cleaning.
        </div>
                                <div className="homeCtas">
                                    <Link to="/SignIn"><button className="buttonSign">Sign In</button></Link><Link to="/SignUp"> <button className="buttonSign">Sign Up</button></Link>
                                </div>

                            </div>
                        </Typography>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}
export default Welcome;
