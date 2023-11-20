import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToDoItem from './ToDoItem';
import AddItemForm from './AddItemForm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export default function BasicGrid() {

  const [ items, setItems ] = useState([]);

  const [ checked, setChecked ] = useState(false);

  const [ open, setOpen ] = useState(false);

  const [ item, setItem ] = useState({
    title: String,
    description: String,
    userId: Number
  });

  const handleChange = (event) => {
    const name = event.target.name;

    if (name === 'title') { 
      setItem({
        ...item,
        title: event.target.value
      });
    } else if (name === 'description'){
      setItem({
        ...item,
        description: event.target.value
      });
    } else {
      setItem({
        ...item,
        userId: Number(event.target.value)
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

    let data = item;

    console.log(data);
    axios({
      method: 'post',
      url: 'http://localhost:8080/items/create',
      data: data,
      validateStatus: (status) => {
        return true; 
      },
    }).catch(error => {
        console.log(error);
    }).then(response => {
        console.log(response);
    });
    setItems([...items, data])
    setOpen(false);
  };

  let style = {
    textDecoration: checked ? 'line-through' : 'none'
  };

  function handleCheck(event) {
    const itemId = event.target.id;
    console.log(itemId);
    setChecked(!checked);
    fetch(`http://localhost:8080/items/delete/${itemId}` , {
      method: "DELETE",
      mode: 'cors',
    })
  }

  useEffect(() => {
    fetch("http://localhost:8080/items", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Welcome, <b>User</b>!</Typography>
        </Grid>  
        {items.map(item => {
          return ( 
            <Grid key={item.id} item xs={12}>
              <ToDoItem 
              handleCheck={handleCheck}
              checked={checked} 
              itemId={item.id} 
              todo={item.title + ": " + item.description} />
            </Grid>
          )
        })}
        <Grid item xs={12}>
          <AddItemForm 
            className='add-item-input'
            open={open} 
            handleCancel={handleCancel}
            handleChange={handleChange}
            handleClickOpen={handleClickOpen}
            handleAdd={handleAdd}
            />    
        </Grid> 
      </Grid>
    </Box>
  );
}