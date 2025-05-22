import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  // 빈 배열 없으면 무한 리렌더링 일어남. 조심할 것!!!!

  return (
    <>
      {/* <Component /> */}
      {/* <Component2 /> */}
      <div>데이터 목록</div>
      {data.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
    </>
  );
}

// 1. 서버에서 데이터를 받아올 때
// function Component() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('...').then((res) => setData(res));
//   }, []);

//   return (
//     <>
//       <div>데이터 목록</div>
//       {data.map((el) => (
//         <div>{el.content}</div>
//       ))}
//     </>
//   );
// }

// 2. 이벤트 핸들러를 사용할 때
// function Component2() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const mouseHandler = () => {
//       '마우스 위치 구해서 상태 업데이트 하는 코드';
//     };

//     window.addEventListener('mousemove', mouseHandler);
//     return () => {
//       window.removeEventListener('mousemove', mouseHandler);
//     };
//   });

//   return <Component2>마우스 위치가 필요한 컴포넌트</Component2>;
// }

// 3. 타이머 함수를 사용할 때

export default App;
