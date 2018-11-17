import React, { Component } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
 state={
   
 }
  render() {
    
    return (
      <div className="App">
      <div></div>
        <Header />
        <Content />
        <Footer />
      </div>
    );

  }

}

export default App;
