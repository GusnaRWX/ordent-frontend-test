import { all } from "redux-saga/effects";
import exampleSaga from "./exampleSaga";
import albumSaga from "./albumSaga";
import userSaga from "./userSaga";
import photoSaga from "./photoSaga";

export default function* rootSaga () {
    yield all([
        exampleSaga(),
        albumSaga(),
        userSaga(),
        photoSaga()
    ])
}