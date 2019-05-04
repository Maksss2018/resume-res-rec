import C from "../constants"

export default function(state = [], action) {
  const {type, payload} = action
  switch (type) {
    case C.LOAD_MAIN_SUCCESS:
      return payload
    case C.CREATE_MAIN_SUCCESS:
      return [...state, {...payload}]
    case C.UPDATE_MAIN_SUCCESS:
      return state.map(course => (course.id === payload.id ? payload : course))
    default:
      return state
  }
}
