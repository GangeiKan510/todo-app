import { Paper } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';

export default function ToDoItem(props) {

  return (
    <Paper style={props.style}>
      <Checkbox id={props.itemId} onChange={props.handleCheck} value={props.checked}/>
      {props.todo}
    </Paper>
  )
}