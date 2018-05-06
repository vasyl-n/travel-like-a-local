import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DestinationInput from '../jsx/DestinationInput.jsx';
import AddSuggestion from "../jsx/AddSuggestion.jsx";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="suggestions">
        <DestinationInput handleInputDest={this.props.handleInputDest} />
        <AddSuggestion userName={this.props.userName} handleAddSuggestion={this.props.handleAddSuggestion} destinations={this.props.destinations} />
      </div>
    )
  }
}

export default Suggestions;