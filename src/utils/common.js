import { REQUEST, SUCCESS, FAILURE } from '../constants/common'

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const action = (type, payload = {}) => ({ type, ...payload })
