import React from 'react';
import ReactDOM from 'react-dom';
import ajaxHandler from '../../lib/ajaxHandler.js';
import DestinationInput from './DestinationInput.jsx';
import AddFriend from './AddFriend.jsx';
import Nav from "./Nav.jsx";


class App extends React.Component {
  constructor() {
    super();
    this.handleInputDest = this.handleInputDest.bind(this);
    this.state = {
      userName: 'Adam',
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


  render() {
    return(
      <div>
        <Nav  />
          <h1>
            SKIP THE TOURIST TRAPS<br />
            ENJOY A CITY LIKE A LOCAL <br />
          </h1>
          <DestinationInput handleInputDest={this.handleInputDest} />
          <AddFriend userName={this.state.userName} friendList={this.state.friendList} />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);