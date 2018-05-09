import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DestinationInput from '../jsx/DestinationInput.jsx';
import AddSuggestion from "../jsx/AddSuggestion.jsx";
import styled from 'styled-components';
import ajaxHandler from '../../lib/ajaxHandler.js';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    }

  }

  componentDidMount() {
    console.log(this.props)
    ajaxHandler.getSuggestionsForUser(this.props.userId, function(res){
      this.setState({
        suggestions: res.data
      })
    }.bind(this))
  }

  render() {

    return(
      <StyledSuggestions>
 
        <StyledSuggestionsList>
          { this.state.suggestions &&
            this.state.suggestions.map((suggestion, ind) => {
              return <li className="suggestion-list-entry">
              <Card>
                <CardTitle 
                  title={`${suggestion.suggestionName}`} 
                  style={{background: 'aqua'}}
                  titleStyle={{fontSize: '22px'}}
                  />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa.
                </CardText>
                <CardActions>
                  <FlatButton label="Delete"
                    onClick={this.onClickDelete}
                  />                  
                </CardActions>
              </Card>
            </li>
            })
          }
        </StyledSuggestionsList>
        <AddSuggestionForm>
          <StyledH3>
            What would you suggest?
          </StyledH3>
          <DestinationInput handleInputDest={this.props.handleInputDest} />
          <AddSuggestion userName={this.props.userName} handleAddSuggestion={this.props.handleAddSuggestion} destinations={this.props.destinations} />
        </AddSuggestionForm>
      </StyledSuggestions>
    )
  }
}

const StyledSuggestions = styled.div`
  display: flex;
`

const AddSuggestionForm = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 0 5rem;
  flex: 0.7;
`

const StyledH3 = styled.h3`
  text-align: center;
`

const StyledSuggestionsList = styled.ul`
list-style: none;
overflow-y: scroll;
flex: 1;
height: 74vh;
`

const ListWrap = styled.div`
flex: 1;
height: 74vh;
overflow-y: scroll;
`


export default Suggestions;