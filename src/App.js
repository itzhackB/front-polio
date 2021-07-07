import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";
import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from './components/Features/Header/Header';
import Sidebar from './components/Features/Sidebar/Sidebar';
import Footer from './components/Features/Footer/Footer';
import Approuter from './AppRouter/Approuter';
import Home from './components/Pages/Home'
import Chat from './components/Pages/Chat'
import Signup from './components/Pages/Signup'
import Login from './components/Pages/Login'
import {auth} from './components/services/Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'







function App() {
// const [user]=useAuthState(auth)
  return (
    // <div className="App">
    //   {user?<Chat/>:<Signup/>}

      <div id="page-content-wrapper">
        <div class="content-header">
          <Router>
            <Header />
            <Sidebar />
            <Approuter />
            <Footer />
          </Router>
        </div>
      </div>
      

  
  );
}

export default App;
