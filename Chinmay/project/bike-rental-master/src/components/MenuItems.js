import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const managerMenuListItems = (
    <div>
        <Link to="bikes" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <Icon>directions_bike</Icon>
                </ListItemIcon>
                <ListItemText primary="Bikes" />
            </ListItem>
        </Link>
        <Link to="users" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <Icon>person</Icon>
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
        </Link>
        <Link to="bike-bookings" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <Icon>list</Icon>
                </ListItemIcon>
                <ListItemText primary="Bookings" />
            </ListItem>
        </Link>
    </div>
);

export const userMenuListItems = (
    <div>

        <Link to="book-a-bike" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <Icon>directions_bike</Icon>
                </ListItemIcon>
                <ListItemText primary="Bikes" />
            </ListItem>
        </Link>
        <Link to="my-bookings" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <Icon>list</Icon>
                </ListItemIcon>
                <ListItemText primary="My Bookings" />
            </ListItem>
        </Link>
    </div>
);