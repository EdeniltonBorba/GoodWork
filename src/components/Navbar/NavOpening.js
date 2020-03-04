import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LogoOpening } from '../Logo/Logo.js';


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            marginLeft: 80,
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginRight: 80,
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function NavOpening() {
    const classes = useStyles();

    return (

        <div className="">
            <AppBar position="static">
                <Toolbar>

                    <Typography className={classes.title} variant="h6" noWrap>
                        <LogoOpening />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}