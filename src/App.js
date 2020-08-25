import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './templates/headers';
import Academicians from './templates/Academicians';
import Footer from './templates/footer';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Academicians/>
      <Footer/>
    </div>
  );
}

export default App;
