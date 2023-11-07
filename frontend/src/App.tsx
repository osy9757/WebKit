import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          {/* 추가적인 라우트들을 여기에 작성할 수 있습니다. */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
