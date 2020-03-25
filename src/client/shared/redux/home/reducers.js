import {
  SET_MODAL
} from '../../enums/types'

const initialState = {
  showModal: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODAL: 
      return {
        ...state,
        showModal: action.obj
      }
    default: return state
  }
}