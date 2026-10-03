import React from 'react'
import './Greeting.css'
const Greeting = () => {
  return (
    <React.Fragment>
      <>
        <h1> this is frgement</h1>
      </>

      <div className="greeting">
        <h1>Hello World</h1>
        <p>Welcome to React</p>
      </div>
      <br/>
      <label htmlFor = "email">Email</label>
      <input id = "email" type ="email"/>
      
    </React.Fragment >

  )
}
export default Greeting
  
