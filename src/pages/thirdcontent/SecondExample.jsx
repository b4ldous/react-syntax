import React, {useState}from 'react'

const SecondExample = () => {

  const [color, setColor]= useState("red");
  return (
    <>
    <h3>My favorite color is { color}</h3>

    <button
        type="button"
        onClick={() => setColor("blue")}
      >Click to change favorite color</button>
    
    </>
  )
}

export default SecondExample