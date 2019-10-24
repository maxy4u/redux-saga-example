import { GET_INIT_COUNT } from './counterActions';
import { INCREMENT, DECREMENT, UPDATE} from '../../constants/common'

export const counterReducerMap = {
  INCREMENT: (state, action) => ({ ...state, counter: state.counter + 1}),
  DECREMENT: (state, action) => ({ ...state, counter: state.counter - 1}),
  UPDATE: (state, action) => ({ ...state, date: new Date()}),
  [GET_INIT_COUNT.SUCCESS]: (state, action) => ({...state, counter: +action.count })
}