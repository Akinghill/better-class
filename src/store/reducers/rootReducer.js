import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import formReducer from './formReducer'
import { combineReducers } from 'redux'
import buttonReducer from './buttonReducer'

const rootReducer =  combineReducers({
    buttons: buttonReducer,
    auth: authReducer,
    form: formReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer