import { call, put, delay, takeEvery } from 'redux-saga/effects'
import { getAlbumnRequest, getAlbumnSuccess, getAlbumnFailed } from '../reducers/slice/albumSlice'
import { getAlbumn } from './api-endpoint/albumApi'

function* fetchGetAlbums (action) {
    try {
        const res = yield call(getAlbumn, action?.payload)

        yield put({
            type: getAlbumnSuccess.toString(),
            payload: {
                data: res?.data
            }
        })
    } catch (err) {
        yield delay(2000)
        yield put({
            type: getAlbumnFailed.toString(),
            payload: {
                errorCode: 400,
                message: 'this is error'
            }
        })
    }
}

function* albumSaga () {
    yield takeEvery(getAlbumnRequest.toString(), fetchGetAlbums)
}

export default albumSaga