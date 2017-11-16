import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import { loginSuccess, loginFailure } from './actions'
import { LOGIN_REQUEST } from './action-types';

const loginData = {
    token: 'ABC',
    user: {
        name: 'Ngoc Dang',
        email: 'ngocdt@mainjs.net',
    },
};

function loginCall({email, password}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'ngocdt@mainjs.net' && password === "123456") {
                resolve(loginData);
            } else {
                reject({status: 'wrong email or password'});
            }
        }, 1000); // 1 second
    })
};

function* watchLoginRequest() {
    while (true) {
        const { payload } = yield take(LOGIN_REQUEST);
        try {
            const response = yield call(loginCall, payload);
            yield put(loginSuccess(response));
        } catch (err) {
            yield put(loginFailure(err.status));
        }
    }
};

export default function* root() {
    yield fork(watchLoginRequest);
}