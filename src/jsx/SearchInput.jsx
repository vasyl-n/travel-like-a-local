import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchDest: ''
    }
    this.handleDestInputSearch = this.handleDestInputSearch.bind(this)
    this.handleSearchDestSubmit = this.handleSearchDestSubmit.bind(this)
  }

  handleDestInputSearch(e) {
    this.setState({
      inputSearchDest: e.target.value
    })
  }

  handleSearchDestSubmit(e) {
    this.props.handleSearchDest(this.state.inputSearchDest);
    // history.pushState('/suggestions', '/suggestions', '/suggestions')
  }


  render() {
    console.log(history)
    return (
        <div className="hero-form">
          <h1>
            Skip the tourist traps<br />
            Enjoy a city like a local<br />
          </h1>
          <div className="explore-form-wrap">
            <TextField 
              hintText="San Francisco"
              floatingLabelText="Where would you like to travel?"
              value={this.state.inputSearchDest} onChange={this.handleDestInputSearch} 
            />
            <Link to='/suggestions' className="explore-submit-form-button">
              <FlatButton label="Submit" primary={true} onClick={this.handleSearchDestSubmit} />
            </Link>
          </div>
        </div>
    );
  }

}

export default SearchInput;