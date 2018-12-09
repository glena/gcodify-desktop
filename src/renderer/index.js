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
  isResized: false,
  height: '',
  width: '',
  laserPrecision: 0.1,  
  laserOnCode: 'M106',
  laserOffCode: 'M107',
  laserSpeed: 10,
  travelSpeed: 200,
  xOffset: 28,
  yOffset: 16,
  zOffset: 90,
})


render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
