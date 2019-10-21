export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';

export function nameChange(name) {
  debugger;
  return {
    type: SET_NAME,
    name
  };
}

// making ageChange use thunk 
export function ageChange(age) {
  debugger;
  return function(dispatch, getState, ...rest) {
    debugger;
    dispatch ({
      type: SET_AGE,
      age
    });
  };
}