
import React from 'react';
import { connect } from 'react-redux';

import PreviewPane from './PreviewPane';
import ComponentsPane from './ComponentsPane';
import AdvancedPane from './AdvancedPane';
import Tabs from '../components/Tabs';

import '../styles/main.scss';
import { settings } from 'cluster';

import { togglePane } from '../actions';


const mapStateToProps = state => {
  return {
    selected: state.visibleComponentsPane
  };
};

const mapDispatchToProps = (dispatch) => ({
  togglePane: (selectedPane) => dispatch(togglePane(selectedPane)),
});


const App = ({ selected, togglePane }) => (
  <div>
    <PreviewPane></PreviewPane>
    <Tabs selected={selected} onSelect={togglePane}>
      <ComponentsPane id="components" name="Image Settings"></ComponentsPane>
      <AdvancedPane id="advanced" name="Printer Settings"></AdvancedPane>
    </Tabs>
  </div>
);

export default connect( mapStateToProps, mapDispatchToProps )(App);