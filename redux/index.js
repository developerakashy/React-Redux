const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake(){   //action creator return a action
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICE_CREAM
    }
}

const iceCreamInitialState = {
    numOfIceCream: 20
}

const cakeInitialState = {
    numOfCakes: 10
}


const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type){
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch(action.type){
        case 'BUY_ICE_CREAM': return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default: return state
    }
}


const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial State: ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
