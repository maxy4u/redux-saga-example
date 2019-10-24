import { userReducerMap } from './userReducerMap'
const initialState = { name: 'Gaurav Khurana', age: 16 }

export const userReducer = (state = initialState, action) => {
  return (userReducerMap[action.type] && userReducerMap[action.type](state, action)) || state
}
