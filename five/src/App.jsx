import { Component, use, useEffect, useState } from 'react';
import './App.css';
function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <>
      {showCounter && <Counter />}
      <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    // 컴포넌트 들어갈 경우 작동
    console.log('useEffect');

    // 컴포넌트 사라질때 작동
    return () => {
      console.log('return function');
    };
  }, []);
  // 빈 배열을 추가하면 첫 화면 렌더 때만 실행됨
  // 배열안에 특정 변수를 넣으면, 변수가 변경될 때 useEffect가 실행
  // 함수 컴포넌트는 리렌더링이 발생할 경우에도 컴포넌트가 사라짐.
  // 즉 정확히 타게팅을 하고 코드를 작성할 것

  // 1. 컴포넌트가 최초로 렌더 될때에만 조작을 하고 싶다!
  useEffect(() => {
    console.log('맨 처음 렌더링 될 때');
  }, []);

  // 2. 컴포넌트가 리렌더링 될 때 조작하고 싶다!
  useEffect(() => {
    console.log('리렌더링...');
  });

  // 3. 특정 상태값이 변할 때에만 조작하고 싶다!
  useEffect(() => {
    console.log('counter의 값이 변할 때');
  }, [counter]);

  useEffect(() => {
    console.log('counter2의 값이 변할 때');
  }, [counter2]);

  // 4. 컴포넌트가 최종적으로 언마운트 될때 조작하고 싶다!
  useEffect(() => {
    return () => {
      console.log('retuned function');
    };
  }, []);

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <div>counter2 : {counter2}</div>
      <button onClick={() => setCounter2(counter2 - 1)}>-1</button>
    </>
  );
}

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 1 };
//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
//   render() {
//     console.log('render');
//     return (
//       <>
//         <div>counter : {this.state.counter}</div>
//         <button
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

export default App;
