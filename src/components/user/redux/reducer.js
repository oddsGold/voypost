import {
    SUCCESSFUL_AUTHENTICATION,
    CLEAR_AUTHENTICATION,
    SET_AUTHENTICATION_USER,
    SET_ERROR_AUTHENTICATED
} from "./types";
const initialState = {
    authenticated: false,
    email: null,
    password: null,
    error: null,
    initials: null
}

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SUCCESSFUL_AUTHENTICATION:
            return {
                ...state,
                // authenticated: sessionStorage.getItem('authenticated')
                authenticated: true
            };

        case CLEAR_AUTHENTICATION:
            return {
                ...state,
                authenticated: false
            };
        case SET_AUTHENTICATION_USER:
            return {
                ...state,
                initials: payload.email.slice(0,2).toUpperCase(), //из-за отстутствия инициалов вставляю первых два символа email когда пользователь авторизировался
                email: payload.email,
                password: payload.password
            };
        case SET_ERROR_AUTHENTICATED:
            return {
                ...state,
                error: payload
            }

        default: return state;
    }
}

export default userReducer;