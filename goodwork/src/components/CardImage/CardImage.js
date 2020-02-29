import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardImgProfile from '../CardImage/CardImgProfile.js';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            height: theme.spacing(80),
            width: theme.spacing('auto')
        },
    },
}));

export default function SimplePaper({ profis }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} style={{ height: "auto" }}>
                <CardImgProfile profis={profis} />
            </Paper>
        </div>
    );
}
