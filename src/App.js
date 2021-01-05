import React, { Component } from 'react';

import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    console.log("Called increment", counter);
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("HandleDelete called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    console.log("Handle reset clicked!")
    const counters = [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]

    this.setState({counters}); 
  };

  handleDecrement = () => {
    console.log("Decremnt is called");
  }

  render() { 
    return <React.Fragment>
    <NavBar/>
    <main className="container">
      <Counters
      counters={this.state.counters}
      onReset = {this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      />
    </main>
  </React.Fragment>;
  }
}
 
export default App ;
