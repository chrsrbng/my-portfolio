import React from 'react'
import { connect } from 'react-redux'

import Home from './home'
import Modal from './modal'

const Root = (props) => {
  const modalState = props.showModal ? '' : 'hide'
  const internalState = props.showModal ? 'blur' : ''

  return (
    <>
      <div className="internal">
        <div className={`modal-container ${modalState}`}>
          <Modal />
        </div>
        <div className={`home-container ${internalState}`}>
          <Home />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    showModal: state.home.showModal
  }
}

export default connect(mapStateToProps)(Root)