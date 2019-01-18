import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserDetails extends Component {
  
  render() {
    // console.log( this.props )
    // console.log( this.props.match.params.id )
    // console.log( this.props.match.params.email)

    return (
      <div className="userDetails">
      <h2>Users Details:</h2>
      </div>
    )

  }

}

const mapStateToProps = (store) => {
  return {
    users: store.usersReducer
  }
}

export default connect(mapStateToProps)(UserDetails)