import React from 'react';

class FriendListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.friend}
      </div>
    );
  }
}

export default FriendListEntry;