import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const MapMarker = (props) => (
  <SvgIcon {...props} fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        <path d="M0 0h24v24H0z" fill="none"/> 
  </SvgIcon>  
)

class MapViewEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isMouseOver: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  
  handleMouseEnter () {
    this.setState({isMouseOver: true})
  }
  
  handleMouseLeave () {
    this.setState({isMouseOver: false})
  }
  
  render() {
    return (
      <div className="map-marker-element">
        <MapMarker
          className="map-marker-icon" 
          color={blue500} 
          hoverColor={greenA200} 
          onMouseEnter={()=>this.handleMouseEnter()}
          onMouseLeave={()=>this.handleMouseLeave()}
          />
          { this.state.isMouseOver ?
            <div className="map-marker-text">{this.props.text}</div>
            :
            null
          }
      </div>
    )
  }
  
}

export default MapViewEntry;