import React from 'react';

function getTab(props, selected, onSelect) {
  const className = `tab ${selected && 'selected' || ''}`;
  return (<div className={className} key={props.id} onClick={()=>{onSelect(props.id);}}>{props.name}</div>);
}

const Tabs = ({ children, selected, onSelect }) => {
  const tabs = children.map(c => getTab(c.props, c.props.id === selected, onSelect));
  const content =children.filter( c => c.props.id === selected );

  return (
    <div className="tabs">
      <div className="tabs-container">
        {tabs}
      </div>
      <div className="tabs-content">
        {content}
      </div>
    </div>
  );
};

export default Tabs;