import React from 'react';
import ReactDOM from 'react-dom';

class SuggestionListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }


  onItemClick = (event) => {
    this.props.handleSuggestionClick(this.props.suggestion);
  }

  render() {
    return (
      <div className="suggestion-list-entry">
        <div className="">
          <div
            className="suggestion-list-entry-title">{this.props.suggestion.title}
          </div>
        </div>
      <div className="add" onClick={this.onItemClick}>+</div>
      </div>
    );
  }
}

export default SuggestionListEntry;
