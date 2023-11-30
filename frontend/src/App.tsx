import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header1 from "./components/Headers/Header1";
import Header2 from "./components/Headers/Header2";
import Header3 from "./components/Headers/Header3";
import Header4 from "./components/Headers/Header4";

import MainPage from './pages/MainPage';
import Table from './pages/Table1';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 기본 경로를 '/main'으로 리디렉트 */}
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<MainPage />} />

          {/* 각 헤더로 이동하는 라우트 */}
          <Route path="/header/1" element={<Header1 />} />
          <Route path="/header/2" element={<Header2 />} />
          <Route path="/header/3" element={<Header3 />} />
          <Route path="/header/4" element={<Header4 />} />
          <Route path="/table/1" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
