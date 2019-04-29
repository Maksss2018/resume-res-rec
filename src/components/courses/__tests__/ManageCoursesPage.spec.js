import React from "react"
import "jest-dom/extend-expect"
import "react-testing-library/cleanup-after-each"
import {render} from "react-testing-library"
import {courses, newCourse, authors} from "../../../../tools/mockData"
import {ManageCoursesPage} from "../ManageCoursesPage"

const renderContainer = args => {
  const defaultProps = {
    courses,
    authors,
    course: newCourse,
    loadCoursesAction: jest.fn(),
    loadAuthorsAction: jest.fn(),
    saveCoursesAction: jest.fn(),
    history: {},
    match: {},
  }
  const props = {...defaultProps, ...args}
  return render(<ManageCoursesPage {...props} />)
}

test("should ", () => {
  const {container} = renderContainer()
})
