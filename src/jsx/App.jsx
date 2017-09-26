import React from 'react';
import ReactDOM from 'react-dom';
import ajaxHandler from '../../lib/ajaxHandler.js';
import DestinationInput from './DestinationInput.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.handleInputDest = this.handleInputDest.bind(this);

  }

  handleInputDest(destination){
    ajaxHandler.handlePostDestination(destination, function(response){
      console.log(response);
    });
  }


  render() {
    return(
      <div>
        <DestinationInput handleInputDest={this.handleInputDest} />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);