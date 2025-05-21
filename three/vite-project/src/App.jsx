import { useState } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState('Normal');
  return (
    <>
      <Face mood={mood} />
      <Face2 mood={mood} />
      <Face3 mood={mood} />
      <div
        className={
          mood === 'Happy' ? 'happy' : mood === 'Normal' ? 'normal' : 'sad'
        }
      >
        기분: {mood}
      </div>
      <div>
        <button onClick={() => setMood('Happy')}>Happy</button>
        <button onClick={() => setMood('Normal')}>Normal</button>
        <button onClick={() => setMood('Sad')}>Sad</button>
      </div>
    </>
  );
}

// 1. if문으로 리턴하는 JSX문 바꿔주기
function Face({ mood }) {
  if (mood === 'Happy') {
    return <div>😊</div>;
  } else if (mood === 'Normal') {
    return <p>😑</p>;
  } else {
    return <span>😩</span>;
  }
}

// 2. 삼항연산자 사용하기 ***
// JSX 구문 내에서 중괄호가 열렸을 경우 if문을 사용 불가. 삼항연산자 가능.
function Face2({ mood }) {
  return (
    <>
      {mood === 'Happy' ? (
        <div>😊</div>
      ) : mood === 'Normal' ? (
        <p>😑</p>
      ) : (
        <span>😩</span>
      )}
    </>
  );
}

//3. 논리 연산자 ***
// true 일 경우에는 내용을 띄우지만 false 인 경우에는 아무것도 띄우지 않는다
function Face3({ mood }) {
  return (
    <>
      {mood === 'Happy' && <div>😊</div>}
      {mood === 'Normal' && <p>😑</p>}
      {mood === 'Sad' && <span>😩</span>}
    </>
  );
}
export default App;
