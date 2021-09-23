import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "."
import { tabReducer } from "./tabReducer"


// export const store = createStore(rootReducer)
export const store = createStore(tabReducer)