import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputDest: ""
    }

    this.handleDestInputChange = this.handleDestInputChange.bind(this)
    this.handleInputDestClick = this.handleInputDestClick.bind(this)

  }

  handleDestInputChange(e){
    this.setState({
      inputDest: e.target.value
    })
  }

  handleInputDestClick(e){
    e.preventDefault();
    Axios.post('http://127.0.0.1:3000/api/destinations/'+ this.state.inputDest)
    .then(function(response){
      console.log(response);
    })
  }


  render() {
    return(
      <div>
        <form>
          <label>
            Destination:
            <input type="text" value={this.state.inputDest} onChange={this.handleDestInputChange}/>
          </label>
          <input type="submit" value="Submit" onClick={this.handleInputDestClick} />
        </form>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);