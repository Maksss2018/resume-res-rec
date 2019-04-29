import {createStore, applyMiddleware} from "redux"
import reducers from "../reducers"
import thunk from "redux-thunk"

function configureStore(initialState) {
  return createStore(reducers, initialState, applyMiddleware(thunk))
}

export default configureStore
