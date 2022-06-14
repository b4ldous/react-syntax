import React from 'react'
import ReactChildrenProps from './firstcontent/ReactChildrenProps'
import ReactComponents from './firstcontent/ReactComponents'
import ReactProps from './firstcontent/ReactProps'
import ReactPropsObjectDestructuring from './firstcontent/ReactPropsObjectDestructuring'


const First = () => {
  return (
    <>
    <h1>React for beginners</h1>

    <a href='https://www.freecodecamp.org/news/the-react-cheatsheet/#react-elements' target='_blank' rel="noreferrer">based on "react cheatSheet for 2022" from FreeCodeCamp</a>
    <h2>React Elements</h2>
    <h2>React Element Attributes</h2>
    <h2>React Element Styles</h2>
    <h1 style={{ fontSize: 24, margin: '0 auto', textAlign: 'center' }}>My header</h1>
    <h2>React Fragments</h2>
    <hr></hr>
    <h2>React Components</h2>
    <ReactComponents/>
    <hr></hr>
    <h2>React props</h2>

    <ReactProps name='Everybody'/>
    <ReactPropsObjectDestructuring nickname='Motherfuckers'/>
    <ReactChildrenProps>
        Hello, this is a children prop example
    </ReactChildrenProps>
    <hr></hr>
    <h2>React Conditionals</h2>
    <hr></hr>
    <h2>React lists</h2>
    <hr></hr>
    <h2>REact Context</h2>
    <hr></hr>

    
    
    



    </>
  )
}

export default First