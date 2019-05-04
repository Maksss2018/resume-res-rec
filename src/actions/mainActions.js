import C from "../constants"
import * as mainApi from "../api/mainApi"
import {beginApiCall, errorApiCall} from "./apiStatusActions"

export const loadMain = () => {
  return function(dispatch) {
    dispatch(beginApiCall())
    return mainApi
      .getMain()
      .then(main => {
        dispatch({
          type: C.LOAD_MAIN_SUCCESS,
          payload: main
        })
      })
      .catch(err => {
        dispatch(errorApiCall())
        throw err
      })
  }
}

export const createSuccessMain = main => ({
  type: C.CREATE_MAIN_SUCCESS,
  payload: main,
})

export const updateSuccessMain = main => ({
  type: C.UPDATE_MAIN_SUCCESS,
  payload: main,
})

export const saveMainAction = main => dispatch => {
  dispatch(beginApiCall())
  return mainApi
    .saveMain(main)
    .then(savedMain => {
      main.id
        ? dispatch(updateSuccessMain(savedMain))
        : dispatch(createSuccessMain(savedMain))
    })
    .catch(err => {
      dispatch(errorApiCall())
      throw err
    })
}
