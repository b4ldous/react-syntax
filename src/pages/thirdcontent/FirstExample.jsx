import React, {useState} from 'react'

const FirstExample = () => {

    const [count, setCount] = useState(0);
    const[initial, discount]= useState(0);
    const substract = ()=> discount(initial  + 1);
  return (
    <>
    <p>You clicked {count} times!</p>

    <button onClick={()=> setCount(count + 1)}> Click me</button>

    <p>You have clicked {initial} times!</p>
    <button onClick={substract}>Click  to +</button>
    
    
    
    </>
  )
}

export default FirstExample