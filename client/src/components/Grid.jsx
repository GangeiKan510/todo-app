import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCard from './Card';
import Greeting from './Greeting';

export default function BasicGrid() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Greeting></Greeting>
      </Grid>
        <Grid item xs={4}>
          <BasicCard></BasicCard>
        </Grid>
        <Grid item xs={4}>
          <BasicCard></BasicCard>
        </Grid>
        <Grid item xs={4}>
          <BasicCard></BasicCard>
        </Grid>
        <Grid item xs={4}>
          <BasicCard></BasicCard>
        </Grid>
      </Grid>
    </Box>
  );
}