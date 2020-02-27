import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AvatarProfile from "../CardProfile/AvatarProfile.js";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
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
                <AvatarProfile profiName={profiName} />
            </Paper>
        </div>
    );
}
