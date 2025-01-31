import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducers } from './rootReducer'


export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)))
