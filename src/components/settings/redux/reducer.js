import {START_FETCHING, STOP_FETCHING, INITIALIZED} from "./types";

const initialState = {
    fetching: false,
    initialized: false
};

export default (state = initialState, action) => {

    switch (action.type) {

        case START_FETCHING:
            return {...state, fetching: true};

        case STOP_FETCHING:
            return {...state, fetching: false};

        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default: return state;
    }
};
