import React from 'react';
import FriendListEntry from "./FriendListEntry.jsx";

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.friendList);
    return(
      <div>
        <p>{this.props.userName} these are your friends:</p>
        {this.props.friendList.map((friend) => <FriendListEntry friend={friend.friendName} key={friend.friendID}/>)}
      </div>
    );
  }
}

export default FriendList;