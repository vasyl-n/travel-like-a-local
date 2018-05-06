import React from 'react';
import FriendList from "../jsx/FriendList.jsx";
import AddFriend from '../jsx/AddFriend.jsx';
class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="friends">
        <AddFriend userName={this.props.userName} friendsToAdd={this.props.friendsToAdd} 
          handleAddFriend={this.props.handleAddFriend} />
        <FriendList userName={this.props.userName} userID={this.props.userID} 
          friendList={this.props.friendList} handleFriendDelete={this.props.handleFriendDelete} />
      </div>
    )
  }
}

export default Friends;