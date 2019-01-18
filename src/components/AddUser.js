import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/users-actions'

class AddUser extends Component {

  handleSubmit = () => {

    let user_id = Math.random().toString().slice(2)
    let name = this.refs.name.value
    let email = this.refs.email.value
    let balance = this.refs.balance.value

    let user = { id: user_id, name: name, email: email, balance: balance  }

    this.props.dispatch( addUser(user) )

  }

  render() {

    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>

        <input type="text" ref="name" placeholder="Full Name" />
        <input type="text" ref="email" placeholder="Email" />
        <input type="text" ref="balance" placeholder="Balance" />
        <input type="submit" value="Add" onClick={this.handleSubmit} />

      </div>
    )

  }

}

export default connect()(AddUser)