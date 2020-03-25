import { combineReducers, createStore } from 'redux'

import home from './home/reducers'

const reducers = combineReducers({
  home
})

export default createStore(reducers)