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
            <a href="">Login</a>
            <a href="">Sign Up</a>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
