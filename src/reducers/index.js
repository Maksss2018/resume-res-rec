import {combineReducers} from "redux"
import courses from "./coursesReducer"
import authors from "./authorsReducer"
import apiStatusReducer from "./apiStatusReducer"

export default combineReducers({
  courses,
  authors,
  apiStatusReducer,
})
