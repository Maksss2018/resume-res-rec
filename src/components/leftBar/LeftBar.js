import React from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {loadMain} from "../../actions/mainActions"

import Spinner from "../common/Spinner"
import {loadCoursesAction} from "../../actions/coursesActions"
import {loadAuthorsAction} from "../../actions/authorsActions"
import PropTypes from "prop-types"

function LeftBar(props) {
  return (
    <span>
      !!!!!!!!!!!!!1!!!!!!!!!!!!!!1
    </span>
  )
}
LeftBar.propTypes = {
  main : PropTypes.object.isRequired
}
function mapStateToProps(state) {
  const {main} = state
  return {
    main: main||null,
  }
}

export default connect(
  mapStateToProps,
  {loadMain},
)(LeftBar)