import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/hompage/home';
import JOIN from './pages/join/join';
import LOGIN from './pages/login/login';
import MyPage from './pages/mypage/mypage';
import ABOUT from './pages/about/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/join" element={<JOIN />}/>
          <Route path="/mypage" element={<MyPage />}/>
          <Route path="/login" element={<LOGIN />}/>
          <Route path="/about" element={<ABOUT />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
