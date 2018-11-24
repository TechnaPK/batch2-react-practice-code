import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  handleSubmit = () => {

    let user_name = this.refs.user_name.value

    let action = { type: "ADD_USER", payload: user_name }
    this.props.dispatch( action )

  }

  render() {

    return (
      <div className="contentArea">

        <div style={{ textAlign: 'center', margin: '20px 0' }}>

          <input type="text" ref="user_name" placeholder="Enter Name" />
          <input type="submit" value="Add" onClick={this.handleSubmit} />

        </div>

        <div className="listArea">
          <h2>Users:</h2>

          {this.props.users.map((value, index) => {
            return <li key={index}>  {value}  </li>
          })}
        </div>
      </div>
    )

  }

}

const mapStateToProps = (store) =>{
  return {
    users: store.usersReducer
  }
}

export default connect( mapStateToProps )( Users )