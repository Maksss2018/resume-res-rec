import {handleResponse, handleError} from "./apiUtils"
const baseUrl = process.env.API_URL + "/main/"

export function getMain() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError)
}

export function saveMain(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(course),
  })
    .then(handleResponse)
    .catch(handleError)
}

export function deleteMain(courseId) {
  return fetch(baseUrl + courseId, {method: "DELETE"})
    .then(handleResponse)
    .catch(handleError)
}
