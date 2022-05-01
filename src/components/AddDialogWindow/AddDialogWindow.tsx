import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useForm, Controller} from "react-hook-form";

import {useAppDispatch} from "../../hooks";
import {createProductThunk} from "../../store";

const AddDialogWindow = () => {

    const {handleSubmit, control} = useForm({mode: "onChange", defaultValues: {name: "", imageUrl: "", count: 0}})

    const dispatch = useAppDispatch();

    const submit = (product: any) => {
        console.log(product);
        if (product.count === 0 || product.imageUrl === '' || product.name === '') {
            alert("please enter some information")
        } else {
            dispatch(createProductThunk({product}))
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add product
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit(submit)}>
                        <DialogTitle>Add product</DialogTitle>
                        <DialogContent>
                            <Controller control={control} render={({field: {ref, ...field}}) => <TextField
                                {...field}
                                inputRef={ref}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Product name"
                                type="text"
                                fullWidth
                                variant="standard"
                            />} name={"name"}
                            />
                            <Controller control={control} render={({field: {ref, ...field}}) => <TextField
                                {...field}
                                inputRef={ref}
                                autoFocus
                                margin="dense"
                                id="imageUrl"
                                label="imageUrl"
                                type="text"
                                fullWidth
                                variant="standard"
                            />} name={"imageUrl"}
                            />
                            <Controller control={control} render={({field: {ref, ...field}}) => <TextField
                                {...field}
                                inputRef={ref}
                                autoFocus
                                margin="dense"
                                id="count"
                                label="count"
                                type="text"
                                fullWidth
                                variant="standard"

                            />} name={"count"}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type={"submit"} onClick={handleClose}>Add</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </div>
    );
};

export {AddDialogWindow};
