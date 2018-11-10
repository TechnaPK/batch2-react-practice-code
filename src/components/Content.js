import React, { Component } from 'react';
import LeftPane from './LeftPane'
import RightPane from './RightPane'

class Content extends Component {

  state = {
    displayMenu: true,
    selectedFood: 'Nothing',
    menu: ["Biryani", "Qourma", "Ice Cream", "Bottles"]
  }



  updateSelection = (value, index) => {

    this.setState({ selectedFood: value })

  }

  handleSubmit = () => {
    
    let menu_item = this.refs.menu_item.value
    let menuItems = this.state.menu.slice()

    menuItems.push( menu_item )

    this.setState({ menu: menuItems })
  }

  render() {

    return (
      <div className="contentArea">
        <div>

          < input type="text" ref="menu_item" />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </div>

        <LeftPane menu={this.state.menu} updateSelection={this.updateSelection} />
        <RightPane selectedFood={this.state.selectedFood} />

      </div>
    )

  }

}
export default Content