import { useState } from 'react';
import './App.css';

function App() {
  // 원시자료형
  //   let [number, setNumber] = useState(1);
  let [array, setArray] = useState([1, 2, 3]);
  console.log('rerendering');

  const handler = () => {
    // array.push(5); // 같은 주소값을 사용하고 있기 때문에 리렌더링이 안일어남. 원래 있던 배열이 아니라 새로운 배열 사용해야함
    // const newArray = array.slice();
    const newArray = [...array];
    newArray.push(5);
    setArray(newArray);
    console.log(newArray);
    //   setNumber(2);
    //   console.log(number);
  };

  return (
    <>
      {/* number : {number} */}
      array : [{array.join(',')}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  );
}

export default App;
