import axios from 'axios';

export const getUserAge = ({payload}) => {
  const url = `http://echo.jsontest.com/age/${payload}` ;
  return axios.get(url);
}