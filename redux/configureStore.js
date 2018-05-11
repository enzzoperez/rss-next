import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const initialState = []
const middleware = [thunk]

const composedEnhacers = compose(
    applyMiddleware(...middleware)
)

const store = createStore(
    reducer,
    initialState, 
    composedEnhacers
)

export default store