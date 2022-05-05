import Reducer from "./Reducers";
import {combineReducers} from "redux";

const rootReducers=combineReducers({
    list:Reducer,
});

export default rootReducers;