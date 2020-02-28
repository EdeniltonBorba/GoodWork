import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu({ setCategory, category }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ButtonListStyle = {
        fontFamily: 'Prompt',
        fontSize: 20,
        color: "white",
    };

    return (
        <div>
            <Button style={ButtonListStyle} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Services
      </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
