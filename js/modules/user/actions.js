import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, RESET_PASSWORD } from "./action-types";

export function loginRequest(email, password) {
    return {
        type: LOGIN_REQUEST,
        payload: {
            email, password
        }
    }
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function resetPassword(email) {
    return {
        type: RESET_PASSWORD,
        payload: {
            email
        }
    }
}