
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { List, Button, IconButton, Typography, Toolbar, AppBar, Divider, Drawer } from '@material-ui/core';
import { managerMenuListItems, userMenuListItems } from './MenuItems';
import { Link } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleChange(event, checked) {
    this.setState({ auth: checked });
  };

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  logout() {
    this.props.firebase.logout();
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const sideList = (
      <div className={classes.list}>
        <List>{managerMenuListItems}</List>
        <Divider />
        <List>{userMenuListItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer('left', true)} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Bike Rental
            </Typography>
            <Button
              color="inherit"
              component={Link} to="/login"
            >
              Sign In
            </Button>
            <Button
              color="inherit"
              component={Link} to="/login"
            >
              Login
              </Button>
            <Button
              color="inherit"
              onClick={() => this.logout()}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  firebaseConnect(),
)(MenuAppBar)