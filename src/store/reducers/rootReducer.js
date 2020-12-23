import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import classroomReducer from './classroomReducer'
import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
    auth: authReducer,
    classroom: classroomReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer