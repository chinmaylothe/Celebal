import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = theme => ({    
    root: {
        margin: theme.spacing.unit * 3,
    },
});

class NewComponent extends Component {
    render() {

    }
}

export default compose(
    withStyles(styles),
    firebaseConnect(['...']),
    connect((state) => ({
        ...: state.firebase.data....,
    })),
)(NewComponent)