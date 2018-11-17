import React, { Component } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  state = {

  }
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route path="/" component={Home} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );

  }

}

export default App;
