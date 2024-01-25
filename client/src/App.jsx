import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import {Route, Routes} from "react-router-dom";
import Login from './components/pages/Login';
function App() {
  return (
    <Routes>
      <Route index element={<Header />} />
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}

export default App;
