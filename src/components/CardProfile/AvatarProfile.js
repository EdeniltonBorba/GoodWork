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
            <Avatar alt="Remy Sharp" src='http://1.bp.blogspot.com/-JaPAPZYMIj0/USkYjJMJzPI/AAAAAAAACZ0/qfLRr3JQAgc/s1600/289578_multik_gubka_bob_1920x1080_(www.GdeFon.ru).jpg' className={classes.large} />
        </div>
    );
}
