import { call, put, delay, takeEvery } from 'redux-saga/effects'
import { getUserRequest, getUserSuccess, getUserFailed } from '../reducers/slice/userSlice'
import { getUsers } from './api-endpoint/userApi'

function* fetchGetUsers (action) {
    try {
        const res = yield call(getUsers, action?.payload)

        yield put({
            type: getUserSuccess.toString(),
            payload: {
                data: res?.data
            }
        })
    } catch (err) {
        yield delay(2000)
        yield put({
            type: getUserFailed.toString(),
            payload: {
                errorCode: 400,
                message: 'this is error'
            }
        })
    }
}

function* userSaga () {
    yield takeEvery(getUserRequest.toString(), fetchGetUsers)
}

export default userSaga