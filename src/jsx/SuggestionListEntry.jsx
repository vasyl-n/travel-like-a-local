import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SuggestionListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="suggestion-list-entry">
        <Card>
          <CardTitle 
            title={`${this.props.suggestion.suggestionName}`} 
            subtitle={`Suggested by ${this.props.suggestion.suggestionSource}`} />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
          <CardActions>
            <FlatButton label="Add to current trip" />
            <a 
              href={this.props.suggestion.suggestionLink} 
              target={this.props.suggestion.target}>
              <FlatButton label="Go to Google maps" />
            </a> 
            
          </CardActions>
        </Card>
      </li>
    );
  }
}



export default SuggestionListEntry;
