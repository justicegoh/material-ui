import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import NoSsr from '@material-ui/core/NoSsr';

const data = { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 };
const rows = Array.from(new Array(1000)).map(() => data);

export default function ListMui() {
  return (
    <NoSsr defer>
      <List>
        {rows.map((row, index) => (
          <ListItem key={index}>
            <ListItemText primary={row.name} />
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </NoSsr>
  );
}
