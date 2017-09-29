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
        for (var i = 0; i < suggestions.length; i++) {
          if (suggestions[i].photos !== undefined) {
            var link = suggestions[i].photos[0].html_attributions[0].match(/href="(.*?")/g);
            link = link[0].slice(6).slice(0,-1);
            suggestionList.push({suggestionName:suggestions[i].name, suggestionSource:source, suggestionLink:link, target:'_blank'});
          } else {
            suggestionList.push({suggestionName:suggestions[i].name, suggestionSource:source, suggestionLink:'#', target:''});
          }
        }
        this.setState({suggestionList:suggestionList});
        //console.log(suggestionList);
      }.bind(this));
    }

    // case when user is logged in
    if (this.state.userName !== 'not logged in') {
      var source = 'Google';
      var suggestionList = [];
      var that = this;
      ajaxHandler.getPlacesFromGoogleMaps(location, function(suggestions){
        for (var i = 0; i < suggestions.length; i++) {
          if (suggestions[i].photos !== undefined) {
            var link = suggestions[i].photos[0].html_attributions[0].match(/href="(.*?")/g);
            link = link[0].slice(6).slice(0,-1);
            suggestionList.push({suggestionName:suggestions[i].name, suggestionSource:source, suggestionLink:link, target:'_blank'});
          } else {
            suggestionList.push({suggestionName:suggestions[i].name, suggestionSource:source, suggestionLink:'#', target:''});
          }
        }
        ajaxHandler.getSuggestionsForLoggedUsers(that.state.userName, location, function(suggestions){
          if (suggestions.length > 0) {
            for (var i = 0; i < suggestions.length; i++) {
              suggestionList.unshift({suggestionName:suggestions[i].suggestionName, suggestionSource:suggestions[i].friendName, suggestionLink:suggestions[i].photoLink, target:'_blank'});
            }
          }
          that.setState({suggestionList:suggestionList});
        });
      });
    }
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