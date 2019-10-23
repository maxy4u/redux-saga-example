import { getUserAge } from '../../apis/user';

export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
export const REQUEST_AGE = 'REQUEST_AGE';
export const RECEIVED_AGE = 'RECEIVED_AGE'

export function nameChange(name) {
  return {
    type: SET_NAME,
    name
  };
}
export function requestAge(payload) {
  return {
    type: REQUEST_AGE,
    payload
  };
}
export function receivedAge(age) {
  return {
    type: RECEIVED_AGE,
    age
  };
}

export function getAge(payload){
  return function(dispatch, getState, ...rest) {
    dispatch(requestAge(payload));
    return getUserAge({payload}).then(
      response => { return dispatch(receivedAge(response.data.age))},
      error => { console.log('An error occurred.', error)},
    )
  } 
}

// making ageChange use thunk 
export function ageChange(age) {
  return function(dispatch, getState, ...rest) {
    dispatch ({
      type: SET_AGE,
      age
    });
  };
}