import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import { Provider } from 'react-redux'
import store from './redux'

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />

            <Switch>

              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              
              <Route path="/users" component={Users} />

              <Route exact path="/" component={Home} />
			  
              <Route path="/" component={Home} />

            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );

  }

}

export default App;
