import {createStore} from "redux"
import rootReducer from "../../reducers"
import {courses} from "../../../tools/mockData"
import * as coursesActions from "../../ac/coursesActions"

test("should create sotore ", () => {
  const course = courses[0]
  const store = createStore(rootReducer, {})

  const action = coursesActions.createSuccessCourse(course)
  store.dispatch(action)

  expect(store.getState().courses[0]).toEqual(course)
})
