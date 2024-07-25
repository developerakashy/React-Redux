import { combineReducers } from "redux";
import { cakeReducer,iceCreamReducer } from './index'

export const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
