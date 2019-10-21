import axios from 'axios';

export const getInitialCount = ({payload}) => {
  debugger;
  const url = `http://echo.jsontest.com/count/${payload}` ;
  return axios.get(url);
}