import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import AddUser from './AddUser'
import UserDetails from './UserDetails'

import { setUsers } from '../actions/users-actions'

class Users extends Component {


  getUsersData = () => {

    fetch('http://localhost:8000/getAllUsers')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.props.dispatch(setUsers(json.data))
      })
      .catch((error) => console.log(error))
  }


  render() {

    const { users } = this.props

    const usersList = users.map((user, index) => {
      return <div key={user._id} className="listItem">

        <li>ID: {user._id}</li>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Balance: {user.balance}</li>

        <Link to={"/users/details/" + user.id + "/" + user.email}>Go To Details</Link>

      </div>
    })

    return (
      <div className="contentArea">

        <Link to="/users/add">Add User</Link>

        <Route path="/users/add" component={AddUser} />
        <Route path="/users/details/:id/:email" component={UserDetails} />

        <div className="listArea">

          <h2>Users:</h2>
          <button onClick={this.getUsersData}>Get Users Data</button>
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