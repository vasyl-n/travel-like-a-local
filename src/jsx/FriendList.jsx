import React from 'react';
import FriendListEntry from "./FriendListEntry.jsx";
import styled from 'styled-components';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.friendList);
    return (
      <FriendsList>

       <div><span className="name">{this.props.userName} </span>these are your friends:</div>
        {this.props.friendList.map((friend) => <FriendListEntry friendID={friend.friendID} userID={this.props.userID} friend={friend.friendName} key={friend.friendID} handleFriendDelete={this.props.handleFriendDelete} />)}
      </FriendsList>
    );
  }
}

const FriendsList = styled.div`

`


export default FriendList;