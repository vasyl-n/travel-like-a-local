import React from "react";
import ReactDOM from "react-dom";

var Nav = (props) => {
  return (
    <nav className="navbar">
      <div class="clearfix">
        <div className="logo">
          <img />
        </div>
          <div className="login-signup">
            {props.userName === 'not logged in' && <a href="login">Login</a>}
            {props.userName !== 'not logged in' &&<a href="logout">Logout</a>}
            {props.userName === 'not logged in' &&<a href="signup">Sign Up</a>}
          </div>
      </div>
    </nav>
  );
};

export default Nav;
