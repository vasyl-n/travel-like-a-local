import React from 'react';
import ReactDOM from 'react-dom';
import ajaxHandler from '../../lib/ajaxHandler.js';
import DestinationInput from './DestinationInput.jsx';
import AddFriend from './AddFriend.jsx';
import Nav from "./Nav.jsx";
import SuggestionList from "./SuggestionList.jsx";
import FriendList from "./FriendList.jsx";
import SearchInput from "./SearchInput.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputDest = this.handleInputDest.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleSearchDest =this.handleSearchDest.bind(this);
    this.state = {
      userName: this.props.username,
      friendsToAdd: [],
      friendList: [],
      suggestionList: []
    }
  }

  componentDidMount(){
    ajaxHandler.getFriendList(this.state.userName, function(response){
      this.setState({
        friendList: response.data
      });
    }.bind(this));
    ajaxHandler.getRemainingFriends(this.state.userName, function(response){
      this.setState({
        friendsToAdd: response.data
      });
    }.bind(this));
    if (this.state.userName === 'not logged in') {
      this.setState({suggestionList:[]});
    }
  }

  handleInputDest(destination){
    ajaxHandler.handlePostDestination(destination, function(response){
      console.log(response);
    });
  }

  handleAddFriend(friend, friendList) {
    var that = this;
    ajaxHandler.handleAddFriend(this.state.userName, friend, function(){
      ajaxHandler.getFriendList(that.state.userName, function(response){
        that.setState({
          friendList: response.data
        });
      });
      ajaxHandler.getRemainingFriends(that.state.userName, function(response){
        that.setState({
          friendsToAdd: response.data
        });
      });
    });
  }

  handleSearchDest(location) {
    if (this.state.userName === 'not logged in') {
      var source = 'Google';
      var suggestionList = [];
      ajaxHandler.getPlacesFromGoogleMaps(location, function(suggestions){
        for (var i = 1; i < suggestions.length; i++) {
          suggestionList.push({suggestionName:suggestions[i].name, suggestionSource:source});
        }
        this.setState({suggestionList:suggestionList});
        console.log(suggestionList);
      }.bind(this));
    }
    // case when user is logged in
  }

  handleSuggestionClick(suggestion) {
    ajaxHandler.handleAddToPlan(this.state.userName,suggestion, function(response){
      console.log(response);
    });
  }


  render() {
    //console.log(this.state.userName);
    return(
      <div>
        <Nav userName={this.state.userName}/>
         <div>
            <SearchInput handleSearchDest={this.handleSearchDest} />
            <SuggestionList suggestionList={this.state.suggestionList}/>
          </div>
          {this.state.userName !== 'not logged in' &&
          <div>
            <DestinationInput handleInputDest={this.handleInputDest} />
            <AddFriend userName={this.state.userName} friendsToAdd={this.state.friendsToAdd} handleAddFriend={this.handleAddFriend}/>
            <FriendList userName={this.state.userName} friendList={this.state.friendList}/>
          </div>
          }
      </div>
    );
  }
}

export default App;