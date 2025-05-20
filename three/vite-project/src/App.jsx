import './App.css';
// import { useState } from 'react';
import { Component } from 'react';

// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       <Count
//         counter={counter}
//         hello={'hello'}
//         array={[1, 2, 3, '안녕하세요']}
//       />
//       <button
//         onClick={() => {
//           setCounter((prev) => prev + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCounter((prev) => prev - 1);
//         }}
//       >
//         -
//       </button>
//     </>
//   );
// }

// function Count({ array, counter, hello }) {
//   console.log('array', array);
//   console.log('counter', counter);
//   console.log('hello', hello);
//   return <div>counter : {counter} </div>;
// }

class App extends Component {
  state = { counter: 2 };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        {/* <div>counter {this.state.counter}</div> */}
        <Count counter={this.state.counter} />
        <PlusButton incrementCounter={this.incrementCounter} />
        <MinusButton decrementCounter={this.decrementCounter} />
      </>
    );
  }
}

class PlusButton extends Component {
  render() {
    return <button onClick={this.props.incrementCounter}>+</button>;
  }
}

class MinusButton extends Component {
  render() {
    return <button onClick={this.props.decrementCounter}>-</button>;
  }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props);
    return <div>counter: {this.props.counter}</div>;
  }
}

export default App;
