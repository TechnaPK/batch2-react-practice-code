import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    // let number = 5;
    // const name = "My name is Umar";

    let names = ["Umar", "Umar", "Ahmad", "Ali"]

    return (
      <div>
        <div style={{ backgroundColor: "red", fontSize: "60px" }} >{ 2 + 2 }</div>
        <ul className="mylist">

          <li> {names[2]}</li>

          
          {names.map(function(value, index){

            return <li key={index}>{index}) {value}</li>

          })}

        </ul>
      </div>
    );

  }

}

export default App;
