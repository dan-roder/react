import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // setState should always be used to modify this.state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <p> Error: { this.state.errorMessage } </p>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={ this.state.lat } />
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));