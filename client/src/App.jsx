import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './components/pages/Login';
import Layout from './Layout';
import Index from './components/pages/Index';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Index />} />
      <Route path='/login' element={<Login />}/>
      </Route>
      
    </Routes>
  );
}

export default App;
