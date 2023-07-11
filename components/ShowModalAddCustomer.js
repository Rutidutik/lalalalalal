import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import API from "../Variables";
import { useState } from "react";

export default function FormDialog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = async () => {
    try {
      // const response = await API.post(`Employee`, user);
      const response = await API.post(`customer/post`, { name, email, phone });
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  // const defaultProps = {
  //   options: top100Films,
  //   getOptionLabel: (option: FilmOptionType) => option.title,
  // };
  // const flatProps = {
  //   options: top100Films.map((option) => option.title),
  // };
  // const [value, setValue] = (React.useState < FilmOptionType) | (null > null);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        לקוח חדש
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle dir="ltr">הוספת לקוח חדש</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText> */}
          <p>שלום {name}</p>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="שם"
            type="text"
            // fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="מייל"
            type="email"
            // fullWidth
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>

          <TextField
            autoFocus
            margin="dense"
            id="phon"
            label="מספר פלאפון"
            type="phone"
            // fullWidth
            variant="standard"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          {/* <Autocomplete
            {...defaultProps}
            id="disable-close-on-select"
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                label="disableCloseOnSelect"
                variant="standard"
              /> 
            )}
          />*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>בטל</Button>
          <Button onClick={handlePost}>שמור</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
