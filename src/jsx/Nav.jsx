import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOn: false,
      open: false,
    }
    this.showTrips = this.showTrips.bind(this);
    this.getTrip = this.getTrip.bind(this);
  }

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };


  showTrips(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  getTrip(id) {
    this.props.getTrip(id)
  }

  render() {
    return (
      <nav className="navbar" data-testid="navbar">
          <div className="logo">
            <h3 data-testid="navbar h3" className="tlal">Travel Like a Local</h3>
          </div>
          <div className="header-links">
          <Link to="/explore">Search</Link>
          <a onClick={this.showTrips} >Trips</a>
           {/* <Dropdown trips={this.props.trips} /> */}
          {/* {this.props.trips && } */}
           <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
              targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
              onRequestClose={this.handleRequestClose}
              >
            <Menu>
            {
              this.props.trips.length > 0 &&
              this.props.trips.map((el, ind) => {

                return <Link to="/trips" key={ind}><MenuItem primaryText={el.name} onClick={this.getTrip} /></Link>

              })
            }
            </Menu>
          </Popover>
          <Link to="/suggestions">Suggestions</Link>
          <Link to="/friends">Friends</Link> 
          {/* <div className="login-signup"> */}
            {/* {props.userName !== 'not logged in' && <span>Hello {props.userName}!     </span>} */}
            
            {this.props.userName !== 'not logged in' && <a data-testid="logout" className="logout-button" href="logout" onClick={()=>localStorage.clear()}>Logout</a>}
            {this.props.userName === 'not logged in' && <a  data-testid="signup" href="signup">SignUp</a>}
            {this.props.userName === 'not logged in' && <a  data-testid="login" href="login">Login</a>}

        </div>

      </nav>
    );
  }

};

export default Nav;
