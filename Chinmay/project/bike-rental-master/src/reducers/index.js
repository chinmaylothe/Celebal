import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { createStore, combineReducers, compose } from 'redux'

// Add firebase to reducers
export const rootReducer = combineReducers({
    firebase: firebaseReducer,
})