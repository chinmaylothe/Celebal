import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import BikeListBodyRow from './BikeListBodyRow'

const styles = theme => ({
    root: {
        margin: theme.spacing.unit * 3,
    },
});

class LoadingRow extends Component {
    render() {
        return (
            <TableRow><TableCell>Loading...</TableCell></TableRow>
        )
    }
}

class NoResultsFoundRow extends Component {
    render() {
        return (
            <TableRow><TableCell>No results found</TableCell></TableRow>
        )
    }
}

class BikeListBody extends Component {
    render() {
        const { bikes, editBike } = this.props;
        return (
            !isLoaded(bikes) ?
                <LoadingRow />
                : isEmpty(bikes) ?
                    <NoResultsFoundRow />
                    : Object.keys(bikes).map(
                        (key, id) => (<BikeListBodyRow key={key} fid={key} bike={bikes[key]} editBike={editBike} />)
                    )
        )
    }
}

class BikeList extends Component {
    render() {
        const { classes, bikes, editBike } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Available</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <BikeListBody bikes={bikes} editBike={editBike} />
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default compose(
    withStyles(styles),
    firebaseConnect(['bikes']),
    connect((state) => ({
        bikes: state.firebase.data.bikes,
    })),
)(BikeList)