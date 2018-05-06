import React from 'react';
import SuggestionList from "../jsx/SuggestionList.jsx";
import MapView from "../jsx/MapView.jsx";
class Trips extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="trips">
        {this.props.suggestionList.length !== 0 && <SuggestionList suggestionList={this.props.suggestionList} weather={this.props.weather} />}
        <MapView suggestionList={this.props.suggestionList}/> 
      </div>
    )
  }
}

export default Trips;