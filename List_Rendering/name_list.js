import React from 'react'

function FunctionClick() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
  return(
    <div>
      // <h2>{names[0]}</h2>
      // <h3>{names[1]}</h3>
      // <h4>{names[2]}</h4>
      // {
      //   names.map(name => <h2> {name}</h2>)
      // }
      {nameList}
    </div>
  )
}

export default FunctionClick
