import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '../AppBar/styles.js';
import { LogoHeader } from '../../components/Logo/index.js';

function AppBarHome() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <LogoHeader />
                </Toolbar>
            </AppBar>
        </React.Fragment >
    )
}
export default AppBarHome;


