import React, {Component} from 'react'

class user_greeting extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    return this.state.isLoggedIn && <div> Welcome Nick</div>

    // return (
    //   this.state.isLoggedIn ?
    //   <div> Welcome Nick </div>:
    //   <div> Welcome Guest </div>
    // )


    // let message
    // if (this.state.isLoggedIn){
    //   message = <div> Welcome Nick</div>
    // } else {
    //   message = <div> Welcome Guest </div>
    // }
    // return <div> {message}</div>


    // if (this.state.isLoggedIn){
    //   return (
    //     <div>
    //       Welcome Nick
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }

    // return (
    //   <div>
    //     <div>
    //       Welcome Nick
    //     </div>
    //     <div>
    //       Welcome Guest
    //     </div>
    //   </div>
    //
    // )
  }
}

export default user_greeting
