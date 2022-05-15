import {
    SET_AUTHENTICATION_USER,
    SUCCESSFUL_AUTHENTICATION,
    CLEAR_AUTHENTICATION,
    SET_ERROR_AUTHENTICATED
} from "./types";
import {startFetching, stopFetching} from "../../settings/redux/actions";

export const successfulAuthentication = () => ({type: SUCCESSFUL_AUTHENTICATION});
export const clearAuthentication = () => ({type: CLEAR_AUTHENTICATION});
export const setAuthUser = (email, password) => ({
    type: SET_AUTHENTICATION_USER, payload: {email, password}
});


export const setError = (error) => ({
    type: SET_ERROR_AUTHENTICATED,
    payload: error
})

export const fetchUser = ({email, password}) => {
    return (dispatch) => {

        dispatch(startFetching());
        try {
            dispatch(setAuthUser(email, password))
        } catch (e) {

        }
        dispatch(stopFetching());
    };
};

export const compareUsers = (sessionUser) => {
    return (dispatch) => {
        dispatch(startFetching());
        try {
            let user = sessionStorage.getItem('userInfo');

            if (JSON.stringify(sessionUser) === JSON.stringify(user)) {
                // sessionStorage.setItem('authenticated', true);
                dispatch(successfulAuthentication());
            }else {
                dispatch(setError("Неверный логин или пароль"));
            }
        }catch (e) {

        }
        dispatch(stopFetching());
    }
}

export const logout = () => {
    return dispatch => {
        // sessionStorage.setItem('authenticated', false);
        dispatch(clearAuthentication());
    }
}