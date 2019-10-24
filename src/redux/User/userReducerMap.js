import { SET_AGE, SET_NAME, RECEIVED_AGE } from '../../constants/common'

const setOrRcvAge = (state, action) => ({ ...state, age: +action.age })
export const userReducerMap = {
  SET_NAME: (state, action) => ({ ...state, name: action.name }),
  SET_AGE: setOrRcvAge,
  RECEIVED_AGE: setOrRcvAge
}
