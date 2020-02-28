import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(5),
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Avatar alt="Remy Sharp" src='https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg' className={classes.large} />
        </div>
    );
}
