import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setModalState } from '../../../../shared/redux/home/actions'

const Body = (props) => {
  const handleNavOnClick = () => {
    props.setModalState(true)
  }

  return (
    <ul className="nav-link">
      <li><a href="#" className="link" onClick={handleNavOnClick}>Work</a></li>
      <li><a href="#" className="link" onClick={handleNavOnClick}>Skills</a></li>
    </ul>
  )
}

const mapToDispatchToProps = dispatch => {
  return bindActionCreators ({
    setModalState
  }, dispatch)
}

export default connect(null, mapToDispatchToProps)(Body)