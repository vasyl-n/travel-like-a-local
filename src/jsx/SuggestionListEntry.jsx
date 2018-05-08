import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SuggestionListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd(){
    this.props.addToTrip(this.props.suggestion.suggestionName, this.props.suggestion.suggestionLink)
  }

  render() {
    return (
      <li className="suggestion-list-entry">
        <Card>
          <div></div>
          <CardTitle 
            title={`${this.props.suggestion.suggestionName}`} 
            subtitle={`Suggested by ${this.props.suggestion.suggestionSource}`} 
            style={{background: 'aqua'}}
            titleStyle={{fontSize: '22px'}}
            />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
          <CardActions>
            <FlatButton label="Add to current trip"
              onClick={this.onClickAdd}
            />
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
