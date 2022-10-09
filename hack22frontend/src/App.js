import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/NewHome/Home'



function App() {
  return (
    // <div className="App">
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

