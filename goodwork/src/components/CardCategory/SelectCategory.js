
import React from 'react';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));



export default function Grouped({ setCategory, category }) {

    const classes = useStyles();

    const handleChange = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    }
    return (
        <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Age</InputLabel>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={category}
                onChange={handleChange}
                input={<BootstrapInput />}
            >
                <MenuItem value="None">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
                <MenuItem value={"Handyman"}>Handyman</MenuItem>
            </Select>
        </FormControl>
    );
}
