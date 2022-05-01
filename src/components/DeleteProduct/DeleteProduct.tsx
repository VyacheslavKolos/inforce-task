import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC} from "react";

import {deleteProductThunk} from "../../store";
import {useAppDispatch} from "../../hooks";

interface IProps{
    id:number
}

const DeleteProduct:FC<IProps> = ({id}) => {

    const dispatch = useAppDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DeleteAndHandleClose = () => {
        dispatch(deleteProductThunk({id}));
        setOpen(false);
    };

    return (
        <div>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                   Delete
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Delete product"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this product?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button  onClick={DeleteAndHandleClose} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export {DeleteProduct};
