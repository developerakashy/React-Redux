import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

const initialState = {
    laoder: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            ...state,
            laoder: true
        }

        case FETCH_USERS_SUCCESS: return {
            laoder: false,
            users: action.payload,
            error: ''
        }

        case FETCH_USERS_FAILURE: return {
            laoder: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}

export default reducer
