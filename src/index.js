import React from "react"
import {render} from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
//import "bootstrap/dist/css/bootstrap.min.css"
import configureStore from "./store"
import App from "./components/App"

/*TODO:
 *  [*] - DB architecture ("./tools/db.json")
 *  [] - Дизайн
 *  [] - вёрстка :
 *  [] router :
 *  [] 404 page,
 *  [] resume,
 *  [] works experiences ( list if company's with links and icons + collapse bars or time diagram ),
 *  [] skills/knowledge's ( progress bars with links icons of courses + make possibly mark "inprogress" ) ,
 *  [] studding`s/courses ( links with notes of the lessons etc) ,
 *  [] gitHub : list of repos + comments, example of code etc
 * [] - header like left or right bar
 * [] - footer like bottom container
 * [] - content container
 *  [] -SEO
 * */

const store = configureStore()
window.store = store

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
)
