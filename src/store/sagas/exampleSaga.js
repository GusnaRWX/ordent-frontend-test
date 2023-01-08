import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
    exampleRequest,
    exampleSuccess,
    exampleFailed
} from '../reducers/slice/exampleSlice'
import { getExample } from './api-endpoint/example-api'

function* fetchGetExample (action) {
    try {
        const res = yield call(getExample, action?.payload)

        yield put({
            type: exampleSuccess.toString(),
            payload: res?.data?.data
        })
    } catch (err) {
        yield delay(2000, true)
        yield put({ type: exampleFailed.toString() })
    }
}

function* exampleSaga () {
    yield takeEvery(exampleRequest.toString(), fetchGetExample)
}

export default exampleSaga