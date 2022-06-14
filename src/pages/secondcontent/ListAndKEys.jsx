import React from 'react'



const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
  //Key is very important
);

const ListAndKEys = () => {

   
  return (
    <>
    <ul>{listItems}</ul>
    
    </>
  )
}

export default ListAndKEys