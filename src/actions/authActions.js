import { configure } from '@testing-library/react'
import axios from 'axios'
import authReducer from '../reducers/authReducer'
import { returnErrors } from './types'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from './types'

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  // Get token from localStore
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  axios.get('/api/auth/user', config)
    .then(res => dispatch({
      type: USER_LOADING,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data,err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })

  axios.get('')
}