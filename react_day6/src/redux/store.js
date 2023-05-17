import {  applyMiddleware, createStore } from "redux";
import {compose} from "redux";
import rootReducer from "./reducers/rootReducer";
import { loggerMiddelware } from "./middleWares/middleWares";
import thunk from "redux-thunk";
import { moviesReducer } from "./reducers/moviesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
export let store;
if (process.env.NODE_ENV==="development"){
        store= createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddelware,thunk)));//,composeEnhancers(applyMiddleware(loggerMiddelware,thunk))
    }else 
    store= createStore(moviesReducer,applyMiddleware(thunk));//,applyMiddleware(thunk)


