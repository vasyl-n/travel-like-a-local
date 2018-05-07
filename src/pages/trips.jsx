import React from 'react';
import SuggestionList from "../jsx/SuggestionList.jsx";
import MapView from "../jsx/MapView.jsx";
import styled from "styled-components"
class Trips extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="trips">
        {this.props.suggestionList.length !== 0 && 
        <div>
        <div className="forecast">Current Weather {this.props.suggestionList.length > 0 ? `in ${this.props.suggestionList[0].suggestionName} is ` : ''}{this.props.weather}</div>
        <Container>
          {this.props.suggestionList.length !== 0 && <SuggestionList suggestionList={this.props.suggestionList} />}
          <MapView suggestionList={this.props.suggestionList}/> 
        </Container>
        </div>
      }
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
`
export default Trips;