import { types } from "../types/types";

const initialState = {
    checking: true
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case types.login:

            return { 
                ...state,
                ...action.payload,
                checking: false
            }

        case types.checking:

            return { 
                ...state,
                checking: false
            }
    
        default:
            return state;
    }

}