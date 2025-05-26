// 프로젝트 최소 요구 사항
// 1. Todo 생성 / 조회 / 수정 / 삭제 (CRUD) 기능 구현
// 2. 현재 시간 표시, 타이머, 스톱워치 중 하나 이상의 기능을 구현
// 3. 랜덤 명언을 표시할 수 있는 컴포넌트 생성
// 4. useState, useEffect, useRef 를 각각 한번 이상 사용

{
  /* <Bonus>
  json-server를 사용해 Todo 정보를 파일로 저장
  Custom Hook 을 만들고 사용 */
}

import './App.css';

function HeadLine() {
  return <h1>Todo List is now on your BukitList!</h1>;
}

function App() {
  return (
    <>
      <header>
        <HeadLine />
      </header>
      <nav>
        <input />
        <button>조회</button>
      </nav>
      <hr />
      <main>
        <h2>It's your Todo List!!</h2>
        <span>번호</span>
        <span>내용</span>
        <span>기능</span>
        <hr />
        <ul>
          <li>
            아 존맛탱
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
        <hr />
        <input />
        <button>추가</button>
      </main>
      <hr />
      <footer>Create by. L</footer>
    </>
  );
}

export default App;
