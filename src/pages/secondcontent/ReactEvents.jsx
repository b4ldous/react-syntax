import React from 'react'

const ReactEvents = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }



  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ReactEvents