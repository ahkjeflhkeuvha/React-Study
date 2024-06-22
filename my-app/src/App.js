import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'

import Home from './pages/home.js'
import About from './pages/about.js'
import Counter from './pages/counter.js'
import Input from './pages/input.js'
import Inputs from './pages/inputs.js';
import UserList from './pages/list.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link>  |
        <Link to="/about">About</Link>  |
        <Link to="/counter">Counter</Link>  |
        <Link to="/input">Input</Link>  |  
        <Link to="/inputs">Inputs</Link>  |  
        <Link to="/userlist">UserList</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/inputs" element={<Inputs />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
