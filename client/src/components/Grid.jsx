import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCard from './Card';
import Greeting from './Greeting';
import { useState, useEffect } from 'react';

export default function BasicGrid() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items", {
      method: "GET",
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'
      }
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
          <Greeting></Greeting>
        </Grid>  
        {items.map(item => {
          return (
            <Grid key={item.id} item xs={4}>
            <BasicCard title={item.title} description={item.description}></BasicCard>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}