import React, { useState } from 'react'



// we define with hooks the state
const FunctionalGreeting = (props) => {

  // use state: generate an private state
  // Description of the state:
  // const [variable, method to actualization] = useState(initial value)
  const [age, setage] = useState(29);

  const birthday = () => {
      // refresh state
      setage(age + 1);
  }

  return (
    <div>
      <h1>
        !Hi {props.name} this is a functional component!
      </h1>
      <h2>
        Your age is : {age}
      </h2>
      <div>
        <button onClick={birthday}>
            Birthday
        </button>
      </div>
    </div>
  )
}

FunctionalGreeting.propTypes = {}

export default FunctionalGreeting