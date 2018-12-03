
import React from 'react';
import Pane from './Pane'
import Preview from './Preview'
import PingButton from './PingButton'

const App = () => (
  <div>
    <Pane><h1>Hello, Electron!</h1></Pane>
    <Pane><PingButton></PingButton></Pane>
    <Pane><Preview></Preview></Pane>
  </div>
);

export default App