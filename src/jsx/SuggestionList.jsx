import React from 'react';
import ReactDOM from 'react-dom';
import SuggestionListEntry from "./SuggestionListEntry.jsx";
import styled from 'styled-components';


class SuggestionList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <StyledSuggestionList>
          {
            this.props.suggestionList.map((suggestion) =>
            {
              if ( this.props.filter.google && suggestion.suggestionSource === 'Google'  ){
                return <SuggestionListEntry
                  suggestion={suggestion}
                  key={suggestion.suggestionName}
                  addToTrip={this.props.addToTrip}
                />
              } 

            })
          }
        </StyledSuggestionList>
    )
  }
}

const StyledSuggestionList = styled.ul`
  list-style: none;
  flex: 1;
  overflow-y: scroll;
  height: 63vh;
`

export default SuggestionList;
