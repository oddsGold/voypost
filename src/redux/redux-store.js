import {applyMiddleware, combineReducers, createStore} from "redux";
import settingsReducer from "../components/settings/redux/reducer";
import userReducer from "../components/user/redux/reducer"
import thunk from "redux-thunk";


let reducers = combineReducers({
    settings: settingsReducer,
    user: userReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

export default store;
