import coursesReducer from "../coursesReducer"
import * as coursesActions from "../../actions/coursesActions"
import C from "../../constants"

describe("reducer", () => {
  test("should update course", () => {
    const initData = [{id: 1, title: "A"}, {id: 2, title: "B"}]
    const newCourse = {id: 2, title: "Clean Code"}

    const action = coursesActions.updateSuccessCourse(newCourse)

    const newState = coursesReducer(initData, action)

    expect(newState[1].title).toEqual("Clean Code")
    expect(newState[1].title).not.toEqual("B")
  })

  test("should create course", () => {
    const initData = [{title: "A"}, {title: "B"}]
    const newCourse = {title: "C"}

    const action = coursesActions.createSuccessCourse(newCourse)

    const newState = coursesReducer(initData, action)

    expect(newState.length).toEqual(3)
    expect(newState[0].title).toEqual("A")
    expect(newState[1].title).toEqual("B")
    expect(newState[2].title).toEqual("C")
  })
})
