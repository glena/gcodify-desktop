import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import configureStore from './store'
import { Provider } from 'react-redux'

let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

const store = configureStore({
  pixelThreshold: 128,
  imageContrast: 0,
  imageBrighness: 0,
})


render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
