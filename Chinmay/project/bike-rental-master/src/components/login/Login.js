import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { withStyles, Paper, TextField } from '@material-ui/core';
// import GoogleButton from 'react-google-button' // optional

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  render() {
    const { classes, handleChange } = this.props;
    const { username } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} >
        <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="string"
              name="username"
              fullWidth
              onChange={(event)=> handleChange(event)}
              value={username}
              inputProps={{ tabIndex: 1 }}
            />
            <TextField
              margin="dense"
              id="color"
              label="Color"
              type="string"
              name="color"
              onChange={(event)=> handleChange(event)}
              fullWidth
              value={bike.color}
              inputProps={{ tabIndex: 2 }}
            />
        </Paper>
      </div>
    )
  }
}


// export const Login = ({ firebase, auth }) => (
//   <div>
//     <button // <GoogleButton/> button can be used instead
//       onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
//     >Login With Google</button>
//     <div>
//       <h2>Auth</h2>
//       {
//         !isLoaded(auth)
//         ? <span>Loading...</span>
//         : isEmpty(auth)
//           ? <span>Not Authed</span>
//           : <pre>{JSON.stringify(auth, null, 2)}</pre>
//       }
//     </div>
//   </div>
// )

Login.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  withStyles(styles),
  firebaseConnect(), // withFirebase can also be used
  connect(({ firebase: { auth } }) => ({ auth }))
)(Login)