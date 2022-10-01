import { combineReducers } from "redux";
import productReducer from "./product/productReducer"


// root reducer
const rootReducer = combineReducers({
    products: productReducer
});

export default rootReducer;