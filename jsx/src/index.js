// Import React and ReactDOM libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create react component
const App = () => {
  return <div>Hi there!</div>;
}

ReactDom.render(<App />, document.querySelector('#root'));