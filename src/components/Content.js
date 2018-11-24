import React, { Component } from 'react';
import { connect } from 'react-redux'

class Content extends Component {

  handleSubmit = () => {

    let menu_item = this.refs.menu_item.value

    let action = { type: "ADD_ITEM", payload: menu_item }
    this.props.dispatch( action )

    // this.props.dispatch( { type: "ADD_MENU_ITEM", data: menu_item } )

  }

  render() {

    console.log( this.props )

    return (
      <div className="contentArea">

        <div style={{ textAlign: 'center', margin: '20px 0' }}>

          <input type="text" ref="menu_item" placeholder="Enter Item Name" />
          <input type="submit" value="Add" onClick={this.handleSubmit} />

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