import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import BikeFormDialog from './BikeFormDialog'
import BikeList from './BikeList'
import { Button } from '@material-ui/core'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir, userIsAuthenticated, userIsNotAuthenticated } from '../../auth/'
import { firebaseConnect } from 'react-redux-firebase'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
  },
  table: {
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  }
});

class BikeAdmin extends Component {
  state = {
    bikeFormDialogIsOpen: false,
    bikeFormDialogAction: 'create',
    bike: {},
    fid: null
  }

  createBike() {
    this.setState((prevState, props) => ({
      bikeFormDialogIsOpen: true,
      bikeFormDialogAction: 'create',
      bike: {
        model: '',
        color: '',
        weight: '',
        location: '',
        available: false
      },
      fid: null
    }));
  }

  editBike(fid, bike) {
    this.setState((prevState, props) => ({
      bikeFormDialogIsOpen: true,
      bikeFormDialogAction: 'edit',
      bike: {
        ...bike
      },
      fid
    }));
  }

  closeBikeFormDialog() {
    this.setState((prevState, props) => ({
      bikeFormDialogIsOpen: false
    }));
  }

  handleChange = event => {
    this.setState({
      bike: {
        ...this.state.bike,
        [event.target.name]: event.target.value,
      }
    })
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={() => this.createBike()}
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Add new bike
        </Button>
        <BikeFormDialog
          action={this.state.bikeFormDialogAction}
          isOpen={this.state.bikeFormDialogIsOpen}
          bike={this.state.bike}
          fid={this.state.fid}
          handleChange={this.handleChange.bind(this)}
          close={this.closeBikeFormDialog.bind(this)}
        />
        <BikeList
          editBike={this.editBike.bind(this)}
        />
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
  firebaseConnect(),
  userIsAuthenticatedRedir
)(BikeAdmin)