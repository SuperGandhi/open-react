import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {
  
  myAge = 25
  // father send info to child
  // props elements HTML attributes
  constructor (props){
    super(props);
    // private data
    this.state = {
      age : 25
    };
  }

  render() {
    return (
      <div>
          <h1>
            !Hi {this.props.name}!
          </h1>
          <h2>
            Your age is: {this.state.age}
          </h2>
          <div>
            <button onClick={this.birthday}> 
              Birthday
            </button>
          </div>
      </div>
    );
  }
}


  birthday = () =>{ 
    this.myAge ++;    
    this.setState((prevState) =>(
      {
        age: prevState.age + 1
      }
    ))
  }

Greeting.propTypes = {
  name: PropTypes.string,
};


export default Greeting;