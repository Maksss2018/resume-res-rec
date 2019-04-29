import C from "../constants"

function endsOfSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS"
}

export default function(state = 0, action) {
  if (action.type === C.BEGIN_API_CALL) {
    return state + 1
  } else if (action.type === C.API_CALL_ERROR || endsOfSuccess(action.type)) {
    return state - 1
  }
  return state
}
