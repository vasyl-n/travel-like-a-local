import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var Nav = (props) => {
  return (
    <nav className="navbar">
        <div className="logo">
          <h3 className="tlal">Travel Like a Local</h3>
        </div>
        <div className="header-links">
        <Link to="/explore">Explore</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/suggestions">Suggestions</Link>
        <Link to="/friends">Friends</Link> 
        {/* <div className="login-signup"> */}
          {/* {props.userName !== 'not logged in' && <span>Hello {props.userName}!     </span>} */}
          
          {props.userName !== 'not logged in' && <a className="logout-button" href="logout" onClick={()=>localStorage.clear()}>Logout</a>}
          {props.userName === 'not logged in' && <a href="signup">SignUp</a>}
          {props.userName === 'not logged in' && <a href="login">Login</a>}
      </div>
    </nav>
  );
};

export default Nav;
