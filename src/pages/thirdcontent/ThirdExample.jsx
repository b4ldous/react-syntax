import React, {useState} from 'react'

const ThirdExample = () => {
    const [color, setColor]= useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      })
        //Sólo actualzará el color
    const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }
    
  return (
    <>
     <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    
    
    
    </>
  )
}

export default ThirdExample