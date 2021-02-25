import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      xLocation: true,
      oLocation: false
    }
  }

  handleGamePlay = (index) => {
    const { squares, xLocation, oLocation } = this.state
    console.log(index)
    if(xLocation === true){
      squares[index] = "X"
      this.setState({squares: squares, xLocation: false,
        oLocation: true})
        console.log(squares)
    } else if (oLocation === true){
      squares[index] = "O"
      this.setState({squares: squares, xLocation: true,
        oLocation: false})
        console.log(squares)
    }
    
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
        { this.state.squares.map((value,index) => {
          return(
            <Square 
              value={ value }
              key={ index }
              index={ index }
              handleGamePlay={ this.handleGamePlay }
            />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
