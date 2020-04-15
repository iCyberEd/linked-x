import { createStore, combineReducers } from "redux";
import usersDBReducer from "./usersDBReducer";
import incidentsReducer from "./incidentsReducer";


let reducers = combineReducers({
    incidents: incidentsReducer,
    items: "itemsReducer",
    usersDB: usersDBReducer
});

let store = createStore(reducers);


export default store;