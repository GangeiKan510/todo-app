import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const customStyle = {
  padding: '10px',
};

export default function Greeting() {
  return (
    <Card sx={{ minWidth: 275 }} style={customStyle}>
      <CardContent>
        <Typography>
        Introducing the <b>Todoodoo App</b>, where productivity meets playfulness! With its cheerful design and intuitive features, managing your to-dos has never been so enjoyable. Let Todoodoo App add a sprinkle of fun to your tasks, turning them into a delightful adventure!
        </Typography>
      </CardContent>
    </Card>
  );
}
