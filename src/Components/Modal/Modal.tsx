import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        width: '100%',
        maxWidth: '800px',
        borderRadius: '12px',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

type CustomizedDialogsProps = {
    btnTitle?: string;
    dialogTitle: string;
    children: React.ReactNode;
    onSave?: () => void;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    onClose?: () => void;
} & DialogProps;

const CustomizedDialogs: React.FC<CustomizedDialogsProps> = ({
    btnTitle,
    dialogTitle,
    children,
    open: controlledOpen,
    setOpen: setControlledOpen,
    onSave,
    onClose,
    ...rest
}) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        onClose?.();
        setOpen(false);
    };

    const handleSave = () => {
        onSave?.();
        handleClose();
    };

    
    return (

        <StyledDialog
            onClose={handleClose}
            open={open}
            {...rest}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {dialogTitle}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {children}
                </Typography>

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSave}>
                    Okey
                </Button>
            </DialogActions>
        </StyledDialog>

    );
}
export default CustomizedDialogs