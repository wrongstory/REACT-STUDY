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
      <MouseFollower />
      <ScrollIndicator />
      <AlertTimer />
      <div style={{ height: '300vh' }}></div>
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

// 마우스를 따라다니는 함수
const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log('mouseMoved!!');
    };
    window.addEventListener('mouseover', handleMouseMove);
    return () => {
      window.removeEventListener('mouseover', handleMouseMove);
    };
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'white',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // 클릭을 방해하지 않음
      }}
    ></div>
  );
};

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollWidth(scrollPercentage);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollWidth}%`,
        height: '10px',
        background: 'blue',
      }}
    ></div>
  );
};

// 3. 타이머 함수를 사용할 때

const AlertTimer = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      showAlert === true ? alert('시간 초과') : null;
    }, 3000);
    return () => {
      clearTimeout(setTimeoutId);
    };
  });

  return <button onClick={() => setShowAlert(false)}>빨리 클릭!!!</button>;
};
export default App;
