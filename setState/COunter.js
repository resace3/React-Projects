import React, {Component} from 'react'

class COunter extends Component {
  constructor(props){
    super(props)

    this.state = {
      count:0
    }
  }

  increment(){
    // this.setState({
    //   this.state.count = this.state.count+1
    // }) -> {
    //   console.log(this.state.count)
    // }
    this.setState((prevState) -> ({
      count: prevState +
    }))

  }

  incremenFive()
  {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render(){
    return (
      <div>
        Count - {this.state.count}
        <button onClick = {() -> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default COunter
