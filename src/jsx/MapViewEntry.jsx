import React, { Component } from 'react';

class MapViewEntry extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <div>{this.props.text}</div>
    
    )
  }
  
}

export default MapViewEntry;