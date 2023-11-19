import { useState, Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [ open, setOpen ] = useState(false);
  const [ item, setItem ] = useState({
    title: String,
    description: String
  });

  const handleChange = (event) => {
    const name = event.target.name;

    if (name === 'title') { 
      setItem({
        ...item,
        title: event.target.value
      });
    } else {
      setItem({
        ...item,
        description: event.target.value
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
 
  async function handleAdd (event) {

    let formData = item;

    console.log(formData);

    await fetch("http://localhost:8080/items/create", {
      method: "POST",
      mode: 'cors', 
      body: formData
    }).then((response) => {
      console.log(response.status);
    });

    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add an item
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Todoodoo Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            name='title'
            margin="dense"
            id="name outline-basic"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            name='description'
            margin="dense"
            id="name outline-basic"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}