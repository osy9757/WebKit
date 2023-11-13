import React from 'react';
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
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
  );
}

export default App;
