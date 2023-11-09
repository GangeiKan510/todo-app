import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonUsage from './Button';

const customStyle = {
  padding: '10px',
};

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }} style={customStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Date Created: November 7, 2023
        </Typography>
        <Typography variant="h5" component="div">
          Todoodoo Item
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Deadline: November 10, 2023
        </Typography>
        <Typography variant="body2">
          A todo item description.
        </Typography>
      </CardContent>
      <ButtonUsage></ButtonUsage>
    </Card>
  );
}
