import React from 'react';
import ReactDOM from 'react-dom';

class SuggestionListEntry extends React.Component {
  constructor(props) {
    super(props);
    //this.onItemClick = this.onItemClick.bind(this);
  }


  // onItemClick(e) {
  //   this.props.handleSuggestionClick(this.props.suggestion);
  // }

  render() {
    return (
      <div className="suggestion-list-entry">
        <div className="suggestion-list-entry-title">
        <a href="#">{this.props.suggestion.suggestionName}</a> FROM {this.props.suggestion.suggestionsSource}
        </div>
      </div>
    );
  }
}

//<div className="add" onClick={this.onItemClick}>+</div>

export default SuggestionListEntry;
