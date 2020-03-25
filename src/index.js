import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

/* Redux */
import store from './client/shared/redux/store'

/* App */
import AppComponent from './client/app/Root'

/* Less */
import './client/shared/assets/less/global.less'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </Provider>
    ,
    document.getElementById('root')
  )
}

render()