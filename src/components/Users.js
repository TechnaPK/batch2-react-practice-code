import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import AddUser from './AddUser'
import UserDetails from './UserDetails'

class Users extends Component {

  render() {

    const {users} = this.props

    const usersList = users.map((user, index) => {
      return <div key={user.id} className="listItem">

        <li>ID: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Balance: {user.balance}</li>

        <Link to={ "/users/details/" + user.id+ "/" + user.email}>Go To Details</Link>

      </div>
    })

    return (
      <div className="contentArea">

        <Link to="/users/add">Add User</Link>

        <Route path="/users/add" component={AddUser} />
        <Route path="/users/details/:id/:email" component={UserDetails} />

        <div className="listArea">

          <h2>Users:</h2>
          {usersList}

        </div>

      </div>
    )

  }

}

const mapStateToProps = (store) => {
  return {
    users: store.usersReducer
  }
}

export default connect(mapStateToProps)(Users)