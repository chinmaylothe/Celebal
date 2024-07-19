import { createStore, combineReducers, compose } from 'redux'
import { rootReducer } from '../reducers'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import '../firebase/config';

// react-redux-firebase config  
export const rrfConfig = {
    userProfile: 'users',
}

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument  
)(createStore)

// Create store with reducers and initial state
const initialState = {}
export const store = createStoreWithFirebase(rootReducer, initialState)