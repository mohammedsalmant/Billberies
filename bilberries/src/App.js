import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Login from './components/Account/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
