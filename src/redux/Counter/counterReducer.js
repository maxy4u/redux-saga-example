import { GET_INIT_COUNT } from './counterActions'
const initState = { counter: 0, date: new Date() }; 

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1} ;
    case "DECREMENT":
      return { ...state, counter: state.counter - 1}
    case "UPDATE":
      return { ...state, date: new Date()}
    case GET_INIT_COUNT.SUCCESS: 
    debugger; 
      return {...state, counter: +action.count }; // plus will ensure a number conversion
    default:
      return state;
  }
};
