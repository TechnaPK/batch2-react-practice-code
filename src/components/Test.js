import React, { Component } from 'react';

class Test extends Component {

  constructor(props){
    super(props)
    console.log( "constructor method is invoked" )
  }

  componentDidMount(){
    console.log( "componentDidMount method is invoked" )
  }

  componentDidUpdate(){
    console.log( "componentDidUpdate method is invoked" )
  }

  componentWillUnmount(){
    console.log( "componentWillUnmount method is invoked" )
  }

  render() {

    console.log( "render method is invoked" )

    return (

      <div className="testComponent">

        <h2 onClick={() => { this.forceUpdate() }}>Test Component {Math.random()}</h2>

        <h4>Random Number: {Math.random()}</h4>

      </div>

    )

  }

}
export default Test