import C from "../../constants"
import * as coursesActions from "../coursesActions"
import {courses, course} from "../../../tools/mockData"

import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import createStore from "redux-mock-store"

const middlewares = [thunk]
const mockStore = createStore(middlewares)

afterEach(() => {
  fetchMock.reset()
})

test("should cereate action from thunk", () => {
  fetchMock.mock("*", {
    body: courses,
    headers: {"content-type": "application/json"},
  })

  const store = mockStore({courses: []})

  const expected = [
    {type: C.BEGIN_API_CALL},
    {type: C.LOAD_COURSES_SUCCESS, payload: courses},
  ]

  store.dispatch(coursesActions.loadCoursesAction()).then(() => {
    expect(store.getActions()).toEqual(expected)
    console.log(store.getActions())
  })
})

test("should create action", () => {
  const course = courses[0]
  const expected = {
    type: C.CREATE_COURSE_SUCCESS,
    payload: course,
  }

  const action = coursesActions.createSuccessCourse(course)
  expect(action).toEqual(expected)
})
