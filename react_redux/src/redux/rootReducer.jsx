import { combineReducers } from "redux";
import { cakeReducer,iceCreamReducer } from './index'
import userReducer from './user/userReducer'

export const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})
