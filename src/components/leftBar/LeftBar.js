import React, {useEffect} from "react"
import {connect} from "react-redux"
//import {Redirect} from "react-router-dom"
import {loadMain} from "../../actions/mainActions"

//import Spinner from "../common/Spinner"
import PropTypes from "prop-types"

function LeftBar({main}) {
  useEffect(() => {
    if (main === null) {
      loadMain().catch(err => {
        console.error(err);
      })
    }
  }, [])

  return (<span>{JSON.stringify(main)}</span>)
}

LeftBar.propTypes = {
  main: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const {main} = state
  return {
    main: main || null,
  }
}

export default connect(
  mapStateToProps,
  {loadMain},
)(LeftBar)
