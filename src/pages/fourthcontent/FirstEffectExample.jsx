import React, {useState, useEffect} from 'react'

const FirstEffectExample = () => {
    const [count, setCount]= useState(0);

     // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
    <p>You have clicked {count} times</p>
    <button onClick={()=>setCount(count + 1)}>click</button>
    
    
    </>
  )
}

export default FirstEffectExample