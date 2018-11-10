import React, { Component } from 'react';

class RightPane extends Component {

  render() {

    return (
      <div className="rightPane">
      <h2>Selected Food: {this.props.selectedFood}</h2>
      </div>
    )

  }

}
export default RightPane