import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import SignInPage from './routes/SignInPage/SignInPage';

function App() {

  useEffect(()=>{
    fetch("http://localhost:8080/api")
    .then(res=>res.json())
    .then(data=>console.log(data));
  });

  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/signIn' element={<SignInPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
