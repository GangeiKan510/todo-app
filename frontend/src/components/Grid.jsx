import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToDoItem from './ToDoItem';
import AddItemForm from './AddItemForm';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export default function BasicGrid() {

  const [items, setItems] = useState([]);

  const [ checked, setChecked ] = useState(false);

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
              style={style}
              handleCheck={handleCheck}
              checked={checked} 
              itemId={item.id} 
              todo={item.title + ": " + item.description} />
            </Grid>
          )
        })}
        <Grid item xs={12}>
          <AddItemForm />    
        </Grid> 
      </Grid>
    </Box>
  );
}