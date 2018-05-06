import React from 'react';
import SearchInput from "../jsx/SearchInput.jsx";

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return(
      <div className="test">
        <SearchInput handleSearchDest={this.props.handleSearchDest} />
      </div>
    )
  }
}

export default Explore;