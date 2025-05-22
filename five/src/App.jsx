import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const { counter, increment, decrement } = useCounter(0, 5);

  const { loading: loading1, data: data1 } = useFetch(
    'http://localhost:3000/data'
  );
  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      {!loading1 && (
        <ul>
          {data1.map((el) => (
            <li key={'data1' + el.id}>{el.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}

// 서버 데이터 가져오기
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};

// counter 커스텀 훅
const useCounter = (initialValue = 0, step = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((prev) => prev + step);
  const decrement = () => setCounter((prev) => prev - step);

  return { counter, increment, decrement };
};

export default App;
