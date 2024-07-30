import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from '@mui/material';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <Link href="/Dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Dashboard" />
        </Link>
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <AddIcon />
        </ListItemIcon>
        <Link href="/new" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="New" />
        </Link>
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <SearchIcon />
        </ListItemIcon>
        <Link href="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Search" />
        </Link>
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Account" />
        </Link>
        </ListItemButton>
        {/* <ListItemButton>
        <ListItemIcon>
            <EventIcon />
        </ListItemIcon>
        <Link href="/event" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Event" />
        </Link>
        </ListItemButton> */}
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
        Future Features
        </ListSubheader>
        <ListItemButton>
        <ListItemIcon>
            <WorkHistoryIcon />
        </ListItemIcon>
        <ListItemText primary="History" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <HelpCenterIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
        </ListItemButton>
    </React.Fragment>
);