import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import AddUser from './AddUser'
import UserDetails from './UserDetails'

class Users extends Component {

  render() {

    const {users} = this.props

    const usersList = users.map((user, index) => {
      return <div key={index} className="listItem">

        <li>ID: {user.id}</li>
        <li>First Name: {user.first_name}</li>

        <Link to={ "/users/details/" + user.id+ "/" + user.first_name}>Go To Details</Link>

      </div>
    })

    return (
      <div className="contentArea">

        <Link to="/users/add">Add User</Link>

        <Route path="/users/add" component={AddUser} />
        <Route path="/users/details/:id/:firstName" component={UserDetails} />

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





  // <Route path = "/users/add" component = { AddUser } />
  // <Route path="/users/details/:id" component={UserDetails} />