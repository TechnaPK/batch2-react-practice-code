import React, { Component } from 'react';


class LeftPane extends Component {

  render() {

    return (
      <div className="leftPane">
      <h2>Menu:</h2>

      { this.props.menu.map( ( value, index ) => {
        return <li key={index} onClick={ () => { 

          this.props.updateSelection( value )
          
        } }  >  {value}  </li>
      }  ) }
      </div>
    )

  }

}
export default LeftPane