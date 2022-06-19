import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />


        <Routes>
        <Route exact path="/Details" element={<Details/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Search" element={<SearchPage/>}/>
        <Route exact path="/" element={<Home/>}/>
        </Routes>

        <Footer />
      </ Router>

    </div>
  );
}

export default App;
