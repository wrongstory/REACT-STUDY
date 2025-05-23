import { useState } from 'react';
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './page/Main';
import Detail from './page/Detail';
import Search from './page/Search';

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate(`/search?animal=${inputValue}`);
  };

  console.log(inputValue);
  return (
    <>
      <header>
        <nav>
          <Link to="/">메인</Link>
        </nav>
        <h1>💚 동물 조아 💚</h1>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={goToSearch}>검색</button>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="search" element={<Search />}></Route>
      </Routes>
      <footer>all rights reserved to L</footer>
    </>
  );
}

export default App;
