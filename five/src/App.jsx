import { useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <ControlledInput />
      <br />
      <UseReftInput />
      <Counter />
    </>
  );
}

export default App;

// 1. 바로 리렌더가 일어나지않음 inputRef.current.value 를 통해 값 가져옴
const UseReftInput = () => {
  const inputRef = useRef(null);
  console.log('UseRefInput');
  const getInputValue = () => {
    // value 값 가져옴 (DOM 주소 접근)
    console.log(inputRef.current.value);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={getInputValue}>input 값 가져오기</button>
      <button onClick={focusInput}>focus</button>
    </>
  );
};

// 2. 바로바로 리렌더링이 일어남
const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');
  console.log('ControlledInput');
  return (
    <input
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

// useRef를 사용하면 리렌더링이 일어나도 이전 값이 저장되어 있음

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const numberRef = useRef(null);

  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}> + </button>
      <button onClick={() => setCounter((prev) => prev - 1)}> - </button>
      <button onClick={() => (numberRef.current = counter)}>Keep Value</button>
      <button onClick={() => console.log(numberRef.current)}>show Value</button>
    </>
  );
};
