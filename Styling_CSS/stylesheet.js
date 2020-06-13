import React from 'react'
import './my_styles.css'


function stylesheet() {
  let className = props.primary ? 'primary':''
  return(
    <div>
      <h1 className ={ ${className} font-xl}> Stylesheets</h1>
    </div>
  )
}

export default FunctionClick
