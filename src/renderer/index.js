import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import configureStore from './store'
import { Provider } from 'react-redux'

let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

const store = configureStore({
  buttonContent: 'ping'
})


render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
