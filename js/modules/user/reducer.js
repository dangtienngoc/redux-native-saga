import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./action-types";

const initState = {
    pending: false,
    message: '',
    user: {},
    error: ''
};

export const userReducer = (state = initState, {payload, type}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...initState,
                pending: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                pending: false,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                ...payload,
                pending: false,
            };

        case LOGOUT:
            return initState;
        default:
            return state;
    }
}