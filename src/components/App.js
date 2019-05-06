import React from "react"
import {Route, Switch} from "react-router-dom"
import CoursesPage from "./courses/CoursesPage"
import HomePage from "./home/HomePage"
import LeftBar from "./leftBar/LeftBar"
import AboutPage from "./about/AboutPage"
import Page404 from "./common/Page404"
import NavMenu from "./common/NavMenu"

import  "./../styles/index.scss"
import {Container, Row, Col} from "reactstrap"

import ManageCoursesPage from "./courses/ManageCoursesPage"

const App = props => (
  <Container fluid={true}>
    <Row>
      <Route
        path="/"
        render={props => (
          <Col md={4} className={" h-100 "}>
            <LeftBar {...props} />
          </Col>
        )}
      />

      <Col md={8}>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/experience" component={CoursesPage} />
          <Route path="/courses" component={AboutPage} />
          <Route path="/courses/:slug" component={ManageCoursesPage} />
          <Route path="/admin/:action" component={ManageCoursesPage} />
          <Route render={props => <Page404 {...props} />} />
        </Switch>
      </Col>
      <Col xs={12}>
        <footer className={" window-top d-flex align-items-med justify-content-center footer "}>
          <h5>Footer</h5>
        </footer>
      </Col>
    </Row>
  </Container>
)

export default App
