import React from 'react'
import ListAndKEys from './secondcontent/ListAndKEys'
import ReactEvents from './secondcontent/ReactEvents'

const Second = () => {
  return (
    <>
    <h1>React js (Documentation)</h1>
    <a href='https://es.reactjs.org/docs/getting-started.html' target='_blank' rel="noreferrer" >Based on the official web page of React</a>
    
    <h2> 6. React events</h2>
    <ReactEvents/>
    <hr></hr>
    <h2>8. Lists and keys</h2>
    <ListAndKEys/>
    </>
  )
}

export default Second