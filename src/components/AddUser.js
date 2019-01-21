import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/users-actions'

class AddUser extends Component {

  saveToServer = () => {
    let name = this.refs.name.value
    let email = this.refs.email.value
    let balance = this.refs.balance.value

    let user = { name: name, email: email, balance: balance }

    var options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('http://localhost:8000/addUser', options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.props.dispatch(addUser(json.data))
      })
      .catch((error) => console.log(error))
  }

  render() {

    return (
      <div style={{ textAlign: 'center', margin: '20px 0' }}>

        <input type="text" ref="name" placeholder="Full Name" />
        <input type="text" ref="email" placeholder="Email" />
        <input type="text" ref="balance" placeholder="Balance" />
        <input type="submit" value="Add" onClick={this.saveToServer} />

      </div>
    )

  }

}

export default connect()(AddUser)