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
              <SuggestionListEntry
                suggestion={suggestion}
                key={suggestion.suggestionName}
                />
            )
          }
        </StyledSuggestionList>
    )
  }
}

const StyledSuggestionList = styled.ul`
  list-style: none;
  flex: 1;
`

export default SuggestionList;
