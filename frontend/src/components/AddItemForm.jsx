import { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const dialogueNames = [
  {
    title: 'title',
    label: 'Title'
  }, 
  {
    title: 'description',
    label: 'Description'
  }, 
  {
    title: 'userId',
    label: 'User ID'
  }];

export default function FormDialog(props) {

  return (
    <Fragment>
      <Button variant="outlined" onClick={props.handleClickOpen}>
        Add an item
      </Button>
      <Dialog open={props.open} onClose={props.handleCancel}>
        <DialogTitle>Todoodoo Details</DialogTitle>
        {dialogueNames.map((result) => {
          return (
            <DialogContent className='form-input'>
              <TextField
                autoFocus
                name={result.title}
                margin="dense"
                id="name outline-basic"
                label={result.label}
                type="text"
                fullWidth
                variant="outlined"
                onChange={props.handleChange}
              />
            </DialogContent>
          )
        })}
        <DialogActions>
          <Button onClick={props.handleCancel}>Cancel</Button>
          <Button onClick={props.handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}