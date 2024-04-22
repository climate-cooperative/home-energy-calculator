import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

export default function SaveButton() {
<<<<<<< HEAD
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
=======
  const [open, setOpen] = useState(false);
>>>>>>> edfdce6b7e2ba1aca6e877cfe4ea8210b39c90db

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

<<<<<<< HEAD
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSendEmail = () => {
        console.log(`Sending email to ${email}`);
        // send email code here

        handleClose();
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Get a link to your results!
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter your email and we will send you a link to these results.</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSendEmail} color="primary">
                        Email
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
=======
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Get a link to your results!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Enter your email and we will send you a link to these results.
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
>>>>>>> edfdce6b7e2ba1aca6e877cfe4ea8210b39c90db
