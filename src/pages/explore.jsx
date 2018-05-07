import React from 'react';
import SearchInput from "../jsx/SearchInput.jsx";

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="search-input-wrap">
        <SearchInput handleSearchDest={this.props.handleSearchDest} />
      </div>
    )
  }
}

export default Explore;