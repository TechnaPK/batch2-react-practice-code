import React, { Component } from 'react';

class Content extends Component {

  state = {
    displayMenu: true,
    selectedFood: 'Nothing',
    menu: ["Biryani", "Qourma", "Ice Cream", "Bottles"]
  }


  handleClick = () => {

    if (this.state.displayMenu === true) {
      this.setState({ displayMenu: false })

    } else {
      this.setState({ displayMenu: true })

    }

  }

  updateSelection = ( value, index ) => {
    console.log( index )
    this.setState({ selectedFood: value })
  }

  render() {

    const menuItems = this.state.menu.map((value, index) => {
      
      return <li key={index} onClick={() => { this.setState({ selectedFood: value }) }} >  {value}  </li>

    })

    return (
      <div>
        <button onClick={this.handleClick}>Toggle Menu</button>
        <h2>Menu:</h2>
        <h2>Selected Food: {this.state.selectedFood}</h2>
        <ul>
          {this.state.displayMenu === true ? menuItems : ''}

        </ul>

      </div>
    )

  }

}
export default Content