import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from "./theme"
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'

import 'firebase/firestore';

// const rrfConfig = {
//   userProfile: 'students',
//   useFirestoreForProfile: true
// }

// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebase)
//   )
// );

// const profileSpecificProps = {
//   userProfile: 'users',
//   useFirestoreForProfile: true,
//   enableRedirectHandling: false,
//   resetBeforeLogin: false
// }


// const rrfProps = {
//   firebase,
//   useFirestoreForProfile: true,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
//   userProfile: 'users', // where profiles are stored in database
//   presence: 'presence', // where list of online users is stored in database
//   sessions: 'sessions'
// }

// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth)
//   if (!isLoaded(auth)) return <div>Loading Screen...</div>;
//   return children
// }

const store = createStore(
  rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase, fbConfig),
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter basename='/better-class'>
          <ThemeProvider theme={theme}>
            <AuthIsLoaded>
              <App />
            </AuthIsLoaded>
          </ThemeProvider>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
