import { createRequestTypes, action } from '../../utils/common'
import { REQUEST, SUCCESS, FAILURE } from '../../constants/common'

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UPDATE = "UPDATE";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function update() {
  return {
    type: UPDATE
  };
}

export const GET_INIT_COUNT = createRequestTypes('GET_INIT_COUNT');

export const initCount = {
  request: (payload) => { return action(GET_INIT_COUNT[REQUEST], {payload})},
  success: (response) => {  return action(GET_INIT_COUNT[SUCCESS], response.data)},
  failure: (error) => { return action(GET_INIT_COUNT[FAILURE], error)}
}