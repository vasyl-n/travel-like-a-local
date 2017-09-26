import React from 'react';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputDestClick = this.handleInputDestClick.bind(this)

  }


  handleInputDestClick(e){
    e.preventDefault();
  }


  render() {
    //console.log(this.props.friendList);



    return(
      <div>
        <form>
          <label>
            Add Friend {this.props.userName}
            <select>

            {this.props.friendList.map((friend)=> <option value={friend.username}>{friend.username}</option>)}

            </select>
          </label>
          <input type="submit" value="Submit" onClick={this.handleInputDestClick} />
        </form>
      </div>
    );
  }
}

export default AddFriend;