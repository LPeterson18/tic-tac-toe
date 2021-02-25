import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    alert(this.props.index)
  }

  render(){
    return(
      <>
        <div onClick={ this.handleClick }
        className="square"></div>
      </>
    )
  }
}
export default Square
