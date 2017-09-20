import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>Hello Yassi and Jay!!!!</div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);