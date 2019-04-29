import React from "react"
import "jest-dom/extend-expect"
import "react-testing-library/cleanup-after-each"
import {render} from "react-testing-library"
import CourseForm from "../CourseForm"
import {courses, newCourse, authors} from "../../../../tools/mockData"

function renderContainer(args) {
  const defaultProps = {
    authors: authors,
    course: newCourse,
    saving: false,
    errors: {},
    onSave: jest.fn(),
    onChange: jest.fn(),
  }
  const props = {...defaultProps, ...args}
  return render(<CourseForm {...props} />)
}

test("should ", () => {
  const {container} = renderContainer()
})
