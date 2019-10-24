import { counterReducerMap } from './counterReducerMap'

const initState = { counter: 0, date: new Date() }

export const counterReducer = (state = initState, action) => {
  return (counterReducerMap[action.type] && counterReducerMap[action.type](state, action)) || state
}
