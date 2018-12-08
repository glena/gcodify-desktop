
import React from 'react';
import Pane from './Pane'
import Preview from './Preview'
import ComponentsPane from './ComponentsPane'

const App = () => (
  <div>
    <Pane><h1>GCODify</h1></Pane>
    <ComponentsPane></ComponentsPane>
    <Pane><Preview></Preview></Pane>
  </div>
);

export default App