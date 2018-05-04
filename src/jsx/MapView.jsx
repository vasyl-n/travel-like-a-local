import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapViewEntry from './MapViewEntry.jsx'

class MapView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      center: { lat: 40.7446790, lng: -73.9485420 },
      zoom: 11    
    }
  }
  
  // componentDidMount () {
    
  // }
  
  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps......')
    
  //   if (this.props.status !== nextProps.status) {
  //     this.setState({
  //       center:''  //nextProps.suggestionList[0].location
  //   });
  // }
  
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps......')
    if ( nextProps.suggestionList[0] ) {
      this.setState({
       center: nextProps.suggestionList[0].location 
      });
      
    }
}


  
  render () {
    
    console.log('map view props.....', this.props.suggestionList[0])
    return (

      <div className='google-map' style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          center={ this.state.center }
          zoom={ this.state.zoom }
          >
          
          { this.props.suggestionList ?
            this.props.suggestionList.map( (suggestion, index) => 
              <MapViewEntry
                key={index}
                lat={ suggestion.location.lat }
                lng={ suggestion.location.lng }
                text={ suggestion.suggestionName }
              />
            )
          
          :
            
          <MapViewEntry
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'Where\'s Waldo\?' }
          />
          }
          
        </GoogleMapReact>
      </div>
      
    );
  }
  
}

export default MapView;
