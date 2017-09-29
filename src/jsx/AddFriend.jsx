import React from 'react';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriendClick = this.handleAddFriendClick.bind(this);
    this.friendOptionChange = this.friendOptionChange.bind(this);
    this.state = {friendOption:''};
  }

  handleAddFriendClick(e){
    e.preventDefault();
    this.props.handleAddFriend(this.state.friendOption);
  }

  friendOptionChange(e) {
    this.setState({friendOption:e.target.value});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.friendsToAdd[0]) {
      this.setState({friendOption: nextProps.friendsToAdd[0].username});
    }
  }

  render() {
    //console.log(this.props.friendsToAdd);
    return(
      <div>
        <form>
          <label>
            <p>Add Friend</p>
            <select onChange={this.friendOptionChange} value={this.state.friendOption}>
            {this.props.friendsToAdd.map((friend)=> <option value={friend.username} key={friend.id}>{friend.username}</option>)}
            </select>
          </label>
          <input type="submit" value="Submit" onClick={this.handleAddFriendClick} />
        </form>
      </div>
    );
  }
}

export default AddFriend;