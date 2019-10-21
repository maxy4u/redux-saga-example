import { takeLatest, put, call, select, all } from 'redux-saga/effects'
import { initCount, GET_INIT_COUNT } from '../redux/Counter/counterActions';
import { getInitialCount } from '../apis/counter';
import { getCounter, getDate } from '../components/Counter/CounterSelector';
import { getName, getAge } from '../components/User/UserSelector';

const entityCurrentState = {

}

// Generic Routine for all kind of fetch
function* fetchEntity(entity, apiFn, { payload, ...rest }){
  debugger;
  console.log(payload, rest);
  try {
    const response = yield call(apiFn, { payload }, rest);
    debugger; 
    yield put(entity.success(response));
    debugger; 
    return response;
  }catch(error){
    debugger;
    yield put(entity.failure(error))
  } 
}

const fetchInitCounter = fetchEntity.bind(null, initCount, getInitialCount)

export default function* root() {
  debugger;
  yield all([
    takeLatest(GET_INIT_COUNT.REQUEST, fetchInitCounter),
  ])
}