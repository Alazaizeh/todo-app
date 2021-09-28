import React, { useContext, useState } from "react";
import { SettingsContext } from "../../context/setting";
import {
  TextField,
  Typography,
  Button,
  Slider,
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Switch,
  Grid,
} from "@mui/material";

function Form(props) {
  const Settings = useContext(SettingsContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const preferencesForm = (e) => {
    if (e) e.preventDefault();

    Settings.setshowCompleted(e.target.sc.checked);
    Settings.setitemsPerPage(e.target.ipg.value);

    handleClose();
  };
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Typography variant="h4" gutterBottom component="div">
          Add To Do Item
        </Typography>
        <Grid container alignItems="center" columns={16} spacing={4}>
          <Grid item xs={3}>
            <label>
              <TextField
                id="outlined-basic"
                label="To Do Item"
                variant="outlined"
                onChange={props.handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />
            </label>
          </Grid>
          <Grid item xs={6}>
            <label>
              <TextField
                onChange={props.handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
                id="outlined-basic"
                label="Assigned To"
                variant="outlined"
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            <label>
              <Slider
                step={1}
                id="difficulty"
                name="difficulty"
                valueLabelDisplay="auto"
                defaultValue={3}
                min={1}
                max={5}
                onChange={props.handleChange}
              />
            </label>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Change User Preferences
            </Button>
          </Grid>
          <Grid container justifyContent="center">
            <label>
              <Button variant="contained" type="submit">
                Add Item
              </Button>
            </label>
          </Grid>
        </Grid>
      </form>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>User Preferences</DialogTitle>
          <DialogContent>
            <form id="preForm" onSubmit={preferencesForm}>
              Items Per Page :
              <TextField
                defaultValue={3}
                margin="dense"
                id="ipg"
                type="number"
                fullWidth
                variant="standard"
              />
              <label>
                Show Completed : <Switch id="sc" defaultChecked />
              </label>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button form="preForm" type="submit">
                  Save
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default Form;
