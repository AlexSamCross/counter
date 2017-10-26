import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: 0
    }
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
    this.scoreChange = this.scoreChange.bind(this);
  }
  // handleIncrement () {
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // }
  // handleDecrement () {

  //   if (this.state.value === 0){
  //     return;
  //   }
  //   this.setState({
  //     value: this.state.value - 1
  //   });
  //}

  scoreChange (event) {
    if (event.target.innerHTML === '+'){
      this.setState({
        value: this.state.value + 1
      });
    }
    else {
      if (this.state.value === 0){
        return;
      }
      this.setState({
        value: this.state.value - 1
      });
    }
  }
  render () {
    return (
      <div className="counter">
        {this.props.header}
        <span className="counter-value">{this.state.value}</span>
        <button onClick={this.scoreChange}>+</button>
        <button onClick={this.scoreChange}>-</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter header='Counter: '/>,
  document.getElementById('root')
);

