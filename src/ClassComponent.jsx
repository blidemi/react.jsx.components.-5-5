import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  increment = () => {
    if (this.state.num < 15) {
      this.setState((prevState) => ({ num: prevState.num + 1 }));
    }
  };

  decrement = () => {
    if (this.state.num > 0) {
      this.setState((prevState) => ({ num: prevState.num - 1 }));
    }
  };

  reset = () => {
    this.setState({ num: 0 });
  };

  incrementByFive = () => {
    this.setState((prevState) => {
      const newNum = prevState.num + 5 < 15 ? prevState.num + 5 : 15;
      return { num: newNum };
    });
  };

  decrementByFive = () => {
    this.setState((prevState) => {
      const newNum = prevState.num - 5 > 0 ? prevState.num - 5 : 0;
      return { num: newNum };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.num}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.incrementByFive}>+5</button>
        <button onClick={this.decrementByFive}>-5</button>
      </div>
    );
  }
}

export default App;