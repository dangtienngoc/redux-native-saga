import { fork } from 'redux-saga/effects'

import { userSaga } from './modules/user';

// Consider using takeEvery
export default function* root() {
    yield fork(userSaga);
}