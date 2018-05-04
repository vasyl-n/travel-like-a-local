import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class MapView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      center: { lat: 40.7446790, lng: -73.9485420 },
      zoom: 11    
    }
  }
  
  
  render () {
    return (

      <div className='google-map' style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }>
          
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'Where\'s Waldo\?' }
          />
          
        </GoogleMapReact>
      </div>
      
    );
  }
  
}

export default MapView;
