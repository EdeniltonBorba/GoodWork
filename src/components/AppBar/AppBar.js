import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '../AppBar/styles.js';
import LogoGoodWork from '../../components/Logo/index.js';

function AppBarHome() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <LogoGoodWork />
                </Toolbar>
            </AppBar>
        </React.Fragment >
    )
}
export default AppBarHome;


