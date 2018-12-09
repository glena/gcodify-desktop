
import React from 'react'

import PreviewPane from './PreviewPane'
import ComponentsPane from './ComponentsPane'
import AdvancedPane from './AdvancedPane'

import '../styles/main.scss';

const App = () => (
  <div>
    <PreviewPane></PreviewPane>
    <ComponentsPane></ComponentsPane>
    <AdvancedPane></AdvancedPane>
  </div>
);

export default App