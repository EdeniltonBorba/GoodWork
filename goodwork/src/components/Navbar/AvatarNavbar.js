import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Patrick" src="https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg" />
        </div>
    );
}
