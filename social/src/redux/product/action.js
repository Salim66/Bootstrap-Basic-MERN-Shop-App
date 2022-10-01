import { GET_ALL_PRODUCT } from "./actionType.js"


// get product action
export const getAllProduct = (payload) => {
    return {
        type: GET_ALL_PRODUCT,
        payload: payload
    }
}