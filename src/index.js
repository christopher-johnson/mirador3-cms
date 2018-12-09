import 'core-js/es6'
import React from 'react'
import { render } from 'react-snapshot'
import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'
import App from './App'
import registerServiceWorker, { unregister } from './registerServiceWorker'
import data from './data.json'
import { store } from 'mirador3-core'
import { Provider } from 'react-redux'
import './styles/index.css'
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0]

if (globalSettings) {
  globalSettings.enableServiceWorker ? registerServiceWorker() : unregister()
}
