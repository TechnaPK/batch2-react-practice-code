import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/users-actions'

class AddUser extends Component {

  handleSubmit = () => {

    let user_id = Math.random().toString().slice(2)
    let first_name = this.refs.first_name.value
    let last_Name = this.refs.last_Name.value

    let user = { id: user_id, first_name: first_name, last_Name: last_Name  }

    this.props.dispatch( addUser(user) )

  }

  render() {

    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>

        <input type="text" ref="first_name" placeholder="Enter First Name" />
        <input type="text" ref="last_Name" placeholder="Enter Last Name" />
        <input type="submit" value="Add" onClick={this.handleSubmit} />

      </div>
    )

  }

}

export default connect()(AddUser)