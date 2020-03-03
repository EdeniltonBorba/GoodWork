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
            <Avatar alt="Patrick" src="https://media-exp1.licdn.com/dms/image/C5603AQEUdIdRc930yA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=bDmNrZkNFhaRZTh4U6rQ4w0TzCMbrSYWvJbH9eLwvNg" />
        </div>
    );
}
