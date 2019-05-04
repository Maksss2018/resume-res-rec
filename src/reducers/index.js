import {combineReducers} from "redux"
import courses from "./coursesReducer"
import authors from "./authorsReducer"
import main from "./mainReducer"
import apiStatusReducer from "./apiStatusReducer"

export default combineReducers({
  main,
  courses,
  authors,
  apiStatusReducer,
})
