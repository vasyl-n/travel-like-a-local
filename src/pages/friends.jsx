import React from 'react';
import FriendList from "../jsx/FriendList.jsx";
import AddFriend from '../jsx/AddFriend.jsx';
import styled from 'styled-components'
class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <FriendsContainer className="friends">
        <FriendList userName={this.props.userName} userID={this.props.userID} 
          friendList={this.props.friendList} handleFriendDelete={this.props.handleFriendDelete} />
        <AddFriend userName={this.props.userName} friendsToAdd={this.props.friendsToAdd} 
          handleAddFriend={this.props.handleAddFriend} />
      </FriendsContainer>
    )
  }
}

const FriendsContainer = styled.div`
  display: flex;
`


export default Friends;