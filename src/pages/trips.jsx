import React from 'react';
import SuggestionList from "../jsx/SuggestionList.jsx";
import MapView from "../jsx/MapView.jsx";
import styled from "styled-components"
import TextField from 'material-ui/TextField';
import ajaxHandler from '../../lib/ajaxHandler.js';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
      open: false,
      googleOn: true,
      friendsOn: true,
      tripOn: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleFriends = this.toggleFriends.bind(this);
    this.toggleGoogle = this.toggleGoogle.bind(this);
    this.toggleTripOn = this.toggleTripOn.bind(this);
    this.addToTrip = this.addToTrip.bind(this);
  }

  styles = {
    toggle: {
      marginBottom: 16,
    }
  }

  handleSubmit(e) {
    console.log(e.key)
    let that = this;
    if ( e.key === 'Enter') {
      ajaxHandler.postItinerary( this.props.userId, this.state.textFieldValue, function(data){
        console.log(data)
        that.props.tripChange(data.data[0].planName)
        that.props.tripIdChange(data.data[0].ID)
        that.props.updateTrips();
      })
    }
  }

  handleChange(e) {
    this.setState({textFieldValue: e.target.value})
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  toggleGoogle(){
    this.setState({googleOn: !this.state.googleOn})
  }

  toggleFriends(){
    this.setState({friendsOn: !this.state.friendsOn})
  }

  toggleTripOn(){
    this.setState({tripOn: !this.state.tripOn})
  }

  addToTrip(name, link){
    var that = this;
    
    var username = this.props.username;
    var destination = this.props.suggestionList.length > 0 ? this.props.suggestionList[0].suggestionName : '';
    var suggestionName = name;
    var suggestionLink = link;
    console.log(username, destination, suggestionName, suggestionLink)

    ajaxHandler.handlePostDestination(destination, function(res){
      ajaxHandler.postNewSuggestion(username, destination, suggestionName, suggestionLink, function(res){
        console.log(res.data)
        ajaxHandler.addSuggestionToItinerary(that.props.tripId, res.data[0].id, function(res){
          console.log(res)
        })
      })
    })

  }

  render() {
    console.log(this.props)
    return(
      <div className="trips">
        {this.props.suggestionList.length !== 0 && 
          <div>
            <Top>
              {this.props.trip ? 
                <TripName>{this.props.trip}</TripName> :
                <div className="text-field-wrap">
                <TextField
                  hintText = "Showering in the Ocean"
                  floatingLabelText = "Give your trip a name"
                  onKeyPress = {this.handleSubmit}
                  onChange = {this.handleChange}
                  value = {this.state.textFieldValue} 
                />
                </div>
              }
               <div className="forecast">Current Weather {this.props.suggestionList.length > 0 ? `in ${this.props.suggestionList[0].suggestionName} is ` : ''}{this.props.weather}</div>
              
              <RaisedButton
                onClick={this.handleClick}
                label="Filter"
              />
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                onRequestClose={this.handleRequestClose}
              >
                <Menu>
                  <Toggle
                    label="Friends"
                    defaultToggled={true}
                    style={this.styles.toggle}
                    onToggle={this.toggleFriends}
                  />
                  <Toggle
                    label="Google"
                    defaultToggled={true}
                    style={this.styles.toggle}
                    onToggle={this.toggleGoogle}
                  />
                  <Toggle
                    label="Current trip"
                    defaultToggled={true}
                    style={this.styles.toggle}
                    onToggle={this.toggleTripOn}
                  />
                </Menu>
              </Popover>

            </Top>
            <Container>
              {this.props.suggestionList.length !== 0 && 
              <SuggestionList suggestionList={this.props.suggestionList} 
                filter={{friends: this.state.friendsOn, google: this.state.googleOn, trip: this.state.tripOn}}
                addToTrip={this.addToTrip}  />}
              <MapView suggestionList={this.props.suggestionList}/> 
            </Container>
          </div>
        }
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
`

const TripName = styled.div`
`

const Top = styled.div`
  display:flex;
  align-items: center;
  height: 53px;
  justify-content: space-between;
  margin: 0 3rem;
`

export default Trips;