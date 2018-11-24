import React, { Component } from 'react';
import { connect } from 'react-redux'

import {addItem, removeItem } from '../actions/menus-actions'

class Content extends Component {

  handleSubmit = () => {

    let menu_item = this.refs.menu_item.value
    
    this.props.dispatch( addItem( menu_item ) )

  }

  handleRemove = () => {

    let menu_item = this.refs.menu_item.value
    this.props.dispatch( removeItem( menu_item ) )

  }

  render() {

    console.log( this.props )

    return (
      <div className="contentArea">

        <div style={{ textAlign: 'center', margin: '20px 0' }}>

          <input type="text" ref="menu_item" placeholder="Enter Item Name" />
          <input type="submit" value="Add" onClick={this.handleSubmit} />
          <input type="submit" value="Remove" onClick={this.handleRemove} />

        </div>

        <div className="listArea">

          <h2>Menus:</h2>
          {this.props.menu.map((value, index) => {
            return <li key={index}>{value}</li>
          })}

        </div>


      </div>
    )

  }

}

const mapStateToProps = (store) =>{
  return {
    menu: store.menusReducer,
    users: store.usersReducer
  }
}


export default connect( mapStateToProps )( Content )










// const mapStateToProps = (store) => {
//   return {
//     menu: store.menusReducer
//   }
// }