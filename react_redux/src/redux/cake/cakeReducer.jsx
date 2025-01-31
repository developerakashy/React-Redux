import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            numOfCakes: state.numOfCakes - action.payload
        }

        default: return state
    }
}

export default cakeReducer
