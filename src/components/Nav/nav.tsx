import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function VerticalNavbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (isOpen : boolean) => (event : React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown'
        ) {
            return;
        }

        setOpen(isOpen);
    };

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem onClick={toggleDrawer(false)}>
                        <ListItemText primary="메뉴 항목 1" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer(false)}>
                        <ListItemText primary="메뉴 항목 2" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer(false)}>
                        <ListItemText primary="메뉴 항목 3" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
