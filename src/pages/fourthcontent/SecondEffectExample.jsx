import React, {useState, useEffect} from 'react'

const SecondEffectExample = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      }, []);
  
  
  
      return (
    <>
    <h3>I have rendered {count} times</h3>
    
    </>
  )
}

export default SecondEffectExample