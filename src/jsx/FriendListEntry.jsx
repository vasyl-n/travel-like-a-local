import React from 'react';

class FriendListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.handleFriendDelete(this.props.userID, this.props.friendID);
  }

  render() {
    return(
      <div>
        <span>{this.props.friend}</span>
        <a onClick={this.handleDelete}>delete</a>
      </div>
    );
  }
}

export default FriendListEntry;