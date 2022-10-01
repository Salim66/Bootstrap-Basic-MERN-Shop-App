import { GET_ALL_PRODUCT } from "./actionType.js";
import initialState from "./initialState.js";



// create product reducer
const productReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: payload,
            }
    
        default:
            return state;
    }

}

// export default
export default productReducer;