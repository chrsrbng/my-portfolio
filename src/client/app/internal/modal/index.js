import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { setModalState } from '../../../shared/redux/home/actions'

const Modal = (props) => {
  const handleOnCloseClick = () => {
    props.setModalState(false)
  }

  return (
    <div className="modal">
      <div className="header-container">
        <div className="title">
          Works
        </div>
        <div className="close">
          <a onClick={handleOnCloseClick}><FontAwesomeIcon icon={faTimes} /></a>
        </div>
      </div>
      <div className="body-container">

      </div>
    </div>

  )
}

const mapToDispatchToProps = dispatch => {
  return bindActionCreators({
    setModalState
  }, dispatch)
}

export default connect(null, mapToDispatchToProps)(Modal)