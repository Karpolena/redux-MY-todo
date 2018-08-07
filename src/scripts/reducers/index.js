import {combineReducers, createStore} from "redux";
import Todo from "./Todo";


const reducers = combineReducers({
    todo: Todo
});

export default createStore(reducers);

