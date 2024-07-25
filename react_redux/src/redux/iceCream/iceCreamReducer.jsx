import { BUY_ICRCREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICRCREAM: return {
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}
