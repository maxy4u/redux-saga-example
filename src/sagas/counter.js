import { takeLatest, put, call, select, all } from 'redux-saga/effects'
import { initCount, GET_INIT_COUNT } from '../redux/Counter/counterActions';
import { getInitialCount } from '../apis/counter';
import { getCounter, getDate } from '../components/Counter/CounterSelector';
import { getName, getAge } from '../components/User/UserSelector';

const entityCurrentState = {

}

// Generic Routine for all kind of fetch
function* fetchEntity(entity, apiFn, { payload, ...rest }){
  try {
    const response = yield call(apiFn, { payload }, rest);
    yield put(entity.success(response));
    return response;
  }catch(error){
    yield put(entity.failure(error))
  } 
}

const fetchInitCounter = fetchEntity.bind(null, initCount, getInitialCount)

const testSagaRedux = function* (){
  const curStateTime = yield select(getDate);
  console.log(`${curStateTime.getHours()} : ${curStateTime.getMinutes()}: ${curStateTime.getSeconds()}`)
} 

export default function* root() {
  yield all([
    takeLatest(GET_INIT_COUNT.REQUEST, fetchInitCounter),
    takeLatest('UPDATE', testSagaRedux)
  ])
}