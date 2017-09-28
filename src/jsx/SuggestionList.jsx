import React from 'react';
import ReactDOM from 'react-dom';
import SuggestionListEntry from "./SuggestionListEntry.jsx";


class SuggestionList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="suggestion-list media">
        <div className="suggestion-list-head">Suggestions:</div>
        {
          this.props.suggestions.map((suggestion, i) =>
            <SuggestionListEntry
              suggestion={suggestion}
              handleSuggestionClick = {this.props.handleSuggestionClick}
              key={i}
            />
          )
        }
      </div>
    )
  }
}

export default SuggestionList;
