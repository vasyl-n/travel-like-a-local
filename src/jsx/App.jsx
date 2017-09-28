import React from 'react';
import ReactDOM from 'react-dom';
import ajaxHandler from '../../lib/ajaxHandler.js';
import DestinationInput from './DestinationInput.jsx';
import AddFriend from './AddFriend.jsx';
import Nav from "./Nav.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputDest = this.handleInputDest.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.state = {
      userName: this.props.username,
      friendList: []
    }
  }

  componentDidMount(){
    ajaxHandler.getRemainingFriends(this.state.userName, function(response){
      this.setState({
        friendList: response.data
      });
    }.bind(this));
  }

  handleInputDest(destination){
    ajaxHandler.handlePostDestination(destination, function(response){
      console.log(response);
    });
  }

  handleAddFriend(friend) {
    var that = this;
    ajaxHandler.handleAddFriend(this.state.userName, friend, function(){
      ajaxHandler.getRemainingFriends(that.state.userName, function(response){
        that.setState({
          friendList: response.data
        });
      });
    });
  }


  render() {
    console.log(this.state.userName);
    return(
      <div>
        <Nav userName={this.state.userName}/>
          <h1>
            SKIP THE TOURIST TRAPS<br />
            ENJOY A CITY LIKE A LOCAL <br />
          </h1>
          {this.state.userName !== 'not logged in' &&
          <div>
            <DestinationInput handleInputDest={this.handleInputDest} />
            <AddFriend userName={this.state.userName} friendList={this.state.friendList} handleAddFriend={this.handleAddFriend}/>
          </div>
          }
      </div>
    );
  }
}

export default App;