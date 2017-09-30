import React from 'react';
import ReactDOM from 'react-dom';
import SuggestionListEntry from "./SuggestionListEntry.jsx";


class SuggestionList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    //console.log(this.props);
    return (
      <div className="suggestion-list media">
        <div className="forecast">{this.props.weather}</div>
        {
          this.props.suggestionList.map((suggestion) =>
            <SuggestionListEntry
              suggestion={suggestion}
              key={suggestion.suggestionName}
            />
          )
        }
      </div>
    )
  }
}

export default SuggestionList;
