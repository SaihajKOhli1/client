import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
  },
}));

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer variant="temporary" open={isOpen} onClose={onClose}>
      <Box sx={{ width: drawerWidth, pt: 2, pb: 2 }}>
        <List>
          <ListItem button component={Link} to="/company/apple">
            <ListItemText primary="Apple Inc." />
          </ListItem>
          <ListItem button component={Link} to="/company/procter-gamble">
            <ListItemText primary="Procter & Gamble Co." />
          </ListItem>
          <ListItem button component={Link} to="/company/exxon-mobil">
            <ListItemText primary="Exxon Mobil Corp." />
          </ListItem>
          <ListItem button component={Link} to="/company/jpmorgan">
            <ListItemText primary="JPMorgan Chase & Co." />
          </ListItem>
          <ListItem button component={Link} to="/company/tesla">
            <ListItemText primary="Tesla, Inc." />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
