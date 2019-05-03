import C from "../constants"

export const beginApiCall = () => ({
  type: C.BEGIN_API_CALL,
})

export const errorApiCall = () => ({
  type: C.API_CALL_ERROR,
})
