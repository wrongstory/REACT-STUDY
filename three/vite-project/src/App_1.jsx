import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const setCounterNumber = () => {
    setCounter(inputValue);
  };
  return (
    <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} incrementCounter={incrementCounter} />
      <MinusButton setCounter={setCounter} />
      <br />
      <CounterInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCounterNumber={setCounterNumber}
      />
    </>
  );
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(Number(event.target.value))}
      />
      <button onClick={setCounterNumber}>입력</button>
    </>
  );
}

function PlusButton({ incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
  // return (
  //   <button
  //     onClick={() => {
  //       setCounter((prev) => {
  //         return prev + 1;
  //       });
  //     }}
  //   >
  //     +
  //   </button>
  // );
}

function MinusButton({ setCounter }) {
  return (
    <button
      onClick={() => {
        setCounter((prev) => prev - 1);
      }}
    >
      -
    </button>
  );
}

function Count({ counter }) {
  return <div>counter : {counter} </div>;
}

// class App extends Component {
//   state = { counter: 2 };

//   incrementCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <>
//         {/* <div>counter {this.state.counter}</div> */}
//         <Count counter={this.state.counter} />
//         <PlusButton incrementCounter={this.incrementCounter} />
//         <MinusButton decrementCounter={this.decrementCounter} />
//       </>
//     );
//   }
// }

// class PlusButton extends Component {
//   render() {
//     return <button onClick={this.props.incrementCounter}>+</button>;
//   }
// }

// class MinusButton extends Component {
//   render() {
//     return <button onClick={this.props.decrementCounter}>-</button>;
//   }
// }

// class Count extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log('props', this.props);
//     return <div>counter: {this.props.counter}</div>;
//   }
// }

export default App;
