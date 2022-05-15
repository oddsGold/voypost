import {START_FETCHING, STOP_FETCHING, INITIALIZED} from "./types";

export const startFetching = () => ({type: START_FETCHING});
export const stopFetching = () => ({type: STOP_FETCHING});

export const initializedSuccess = () => ({type: INITIALIZED});

export const initializedSuccessApp = () => {
    let userInfo = {'email': 'test@gmail.com', 'password': "123"} //Тестовые логин и пароль. Храню в сесии из-за отсутствия БД

    return (dispatch) => {
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        dispatch(initializedSuccess());
    }
}
