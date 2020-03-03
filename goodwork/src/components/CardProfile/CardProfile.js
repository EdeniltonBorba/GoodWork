import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import UserProfile from "../CardProfile/UserProfile.js";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: theme.spacing(40),
            marginTop: theme.spacing(2),
            width: theme.spacing(100),
            height: theme.spacing(80),
        },
    },
}));

export default function SimplePaper({ profiName }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <UserProfile />
            </Paper>
        </div>
    );
}
