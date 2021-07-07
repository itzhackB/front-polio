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




function App() {

  return (


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
