import { call, put, delay, takeEvery, take } from 'redux-saga/effects'
import { getPhotoRequest, getPhotoSuccess, getPhotoFailed } from '../reducers/slice/photoSlice'
import { getPhotos } from './api-endpoint/photoApi'

function* fetchGetPhoto (action) {
    try {
        const res = yield call(getPhotos, action?.payload)

        yield put({
            type: getPhotoSuccess.toString(),
            payload: {
                data: res?.data
            }
        })
    } catch (err) {
        yield delay(2000)
        yield put({
            type: getPhotoFailed.toString(),
            payload: {
                errorCode: 400,
                message: 'this is error'
            }
        })
    }
}

function* photoSaga () {
    yield takeEvery(getPhotoRequest.toString(), fetchGetPhoto)
}

export default photoSaga