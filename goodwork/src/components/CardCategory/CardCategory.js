import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SelectCategory from '../CardCategory/SelectCategory.js';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            height: theme.spacing(80),
            alignItems: 'center',

        },
    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <h1>
                    <SelectCategory />
                </h1>
            </Paper>

        </div>
    );
}
