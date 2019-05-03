import C from "../constants"
import * as courseApi from "../api/courseApi"
import {beginApiCall, errorApiCall} from "./apiStatusActions"

export const loadMainAction = () => {
  return function(dispatch) {
    dispatch(beginApiCall())
    return courseApi
      .getMAIN()
      .then(MAIN => {
        dispatch({
          type: C.LOAD_MAIN_SUCCESS,
          payload: MAIN,
        })
      })
      .catch(err => {
        dispatch(errorApiCall())
        throw err
      })
  }
}

export const createSuccessCourse = course => ({
  type: C.CREATE_COURSE_SUCCESS,
  payload: course,
})

export const updateSuccessCourse = course => ({
  type: C.UPDATE_COURSE_SUCCESS,
  payload: course,
})

export const saveMAINAction = course => dispatch => {
  dispatch(beginApiCall())
  return courseApi
    .saveCourse(course)
    .then(savedCourse => {
      course.id
        ? dispatch(updateSuccessCourse(savedCourse))
        : dispatch(createSuccessCourse(savedCourse))
    })
    .catch(err => {
      dispatch(errorApiCall())
      throw err
    })
}
