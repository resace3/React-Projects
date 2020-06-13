import React from 'react'

function FunctionClick(props) {
  return(
    <div>
      <button onClick = {() => props.greetHandler('child')}> Greet Parent </button>
    </div>
  )
}

export default FunctionClick
