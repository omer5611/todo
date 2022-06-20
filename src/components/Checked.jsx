import * as React from 'react';
import { useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Checked(props) {
  const { objects ,setObjects} = props;
  //const [objs,setObjs] = React.useState(objects);

  
  useEffect(() => {
  // console.log(objects);
  },[objects]);

  
  const handleToggle = (value) => () => {
   
    setObjects(objects.map(obj => obj.key === value.key ?  
      {
        key: value.key,
        value: value.value,
        checked: false
       } : obj));
  };

  return (
    <Paper class="paper" style={{'max-height': '250px','min-height': '250px', 'overflow': 'auto' }}>
    <List sx={{ width: '100%', maxWidth: 360 ,margin: 'auto'}}>
      {objects.map((value) => {
        if(value.checked) {
        const labelId = `checkbox-list-secondary-label-${value.key}`;
        return (
          <ListItem
            key={value.key}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={true}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton onClick={handleToggle(value)}>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.key + 1}`}
                  src={`/static/images/avatar/${value.key + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={value.key} 
              primary={<Typography type="body2" style={{ 'text-decoration': 'line-through'}}> {value.value}</Typography>} />
            </ListItemButton>
          </ListItem>
        );
}})}
    </List>
    </Paper>
  );
}
