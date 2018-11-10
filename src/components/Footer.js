import React, { Component } from 'react';

class Footer extends Component {

  render() {
    let year = new Date().getFullYear()
    return (
      <div>
        <p style={{ textAlign: 'center' }}>copyright &copy; {year}. All rights reserved.</p>
      </div>
    )

  }

}


export default Footer