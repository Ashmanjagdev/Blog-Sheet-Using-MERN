import React from 'react';

const Data = (props) => {

  return(
    <>
    <div className="items"  >
     <h2>{ props.heading }</h2>
  <p>{ props.content }</p>
  
  <b><p className="time">{ props.date }</p></b>
  </div>
    </>
  )
} 
export default Data;