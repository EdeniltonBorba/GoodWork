import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PersonalDetails from './PersonalDetails';
import color from '@material-ui/core/colors/amber';

const ButtonStyle = {
    backgroundColor: "#3f51b5",
    color: "white",
    marginTop: 350,
    marginLeft: 500,

};

export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" style={ButtonStyle} onClick={handleClickOpen}>
                Start Registration
      </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        <PersonalDetails />
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    );
}
