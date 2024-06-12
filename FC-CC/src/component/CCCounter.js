import React, { Component } from 'react'

export default class CCCounter extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
         score:0,
         age:0,
     }
   }

   componentDidMount(){

  console.log(`CC - loaded`);

   }
   componentWillUnmount(){

  console.log(`CC - will unloaded`);


   }

  render() {
    return (
      <div className='cc'>

<h1>CC Component</h1>
      <h1> Score : {this.state.score}</h1>
      <button
        onClick={() => {
          this.setState({score:this.state.score + 1});
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          this.setState({score:this.state.score - 1});
        }}
      >
        -
      </button>

      <h1> Age : {this.state.age}</h1>
      <button
        onClick={() => {
          this.setState({age:this.state.age + 1});
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          this.setState({age:this.state.age - 1});
        }}
      >
        -
      </button>



      </div>
    )
  }
}
