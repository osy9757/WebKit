import React from 'react';
<<<<<<< HEAD
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> 8c442ceaae2a4598f220e824a5b963c41325fad8

import Header from "./components/Header";

import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* / 으로 접근하든 /main 으로 접근하든 홈으로 이동할 수 있게 설정 */}
          <Route path="/" element={<Navigate to="/main" replace />} />
          {/* 홈/메인 */}
          <Route path="/main" element={<Home />} />
        </Routes>
      </header>
    </div>
=======
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/main" element={<MainPage />} />
            {/* 추가적인 라우트들을 여기에 작성할 수 있습니다. */}
          </Routes>
      </div>
    </BrowserRouter>
>>>>>>> 8c442ceaae2a4598f220e824a5b963c41325fad8
  );
}

export default App;
