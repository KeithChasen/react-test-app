import React, { Component } from 'react';
import People from './People'
import './App.css';

class App extends Component {
  state = {
    people : [
        {id:1, name: 'Keith', age: 29},
        {id:2, name: 'Kostya', age: 29},
        {id:3, name: 'John', age: 50},
        {id:4, name: 'Paul', age: 72},
    ]
  }
  render() {
    return (
        <div className="App">
          <h1>App</h1>
          <People people={this.state.people}/>
        </div>
    );
  }
}

export default App;

