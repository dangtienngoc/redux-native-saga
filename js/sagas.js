import { fork } from 'redux-saga/effects'

import { user } from './modules/user';

// Consider using takeEvery
export default function* root() {
    yield fork(user);
}