import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    counterNew: 0,
    clearCounter: 0
  };
  resetForm = () => {
    this.setState({
      counter: 0,
      counterNew: 0
    });
  };

  incHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  incHandlerFive = () => {
    this.setState({
      counterNew: this.state.counterNew + 5
    });
  };

  decHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  decHandlerFive = () => {
    this.setState({ counterNew: this.state.counterNew - 5 });
  };
  render() {
    return (
      <div>
        <div>
          <h3>Zerowanie licznika:</h3>
          <button onClick={this.resetForm}>clear</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.incHandler}>+</button>
          <button onClick={this.decHandler}>-</button>
          <h3>Zwiększanie i zmniejszanie licznika o 1: </h3>
        </div>

        <div>
          <h2>{this.state.counterNew}</h2>
          <button onClick={this.incHandlerFive}>+</button>
          <button onClick={this.decHandlerFive}>-</button>
          <h3>Zwiększanie i zmniejszanie licznika o 5: </h3>
        </div>
      </div>
    );
  }
}

export default App;
