import React, {Component} from 'react'

class lifecycle_A extends Component {

  constructor(props){
    super(props)

    this.state={
      name:'Nick'
    }
  }

  static getDerivedStateFromProps(props, state){
    return null
  }

  componenDidMount(){
    console.log('hello')
  }

  render(){
    return (
      <div>
        Lifecycle A
        <lifecycle_B/>
      </div>
    )
  }
}

export default lifecycle_A
