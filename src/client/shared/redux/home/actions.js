import {
  SET_MODAL
} from '../../enums/types'

export function setModalState(obj) {
  return {
    type: SET_MODAL,
    obj
  }
}