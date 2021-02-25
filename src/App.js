import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xLocation: true,
      oLocation: false
    }
  }

  handleGamePlay = (index) => {
    const { squares, xLocation, oLocation } = this.state
    console.log(index)
    if(squares[index] !== null){
    } else if(xLocation === true){
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

  //have array squares filled with Xs and Os
  //we want to compare squares to win condition arrays
  //works for both X and O wins

  checkWinner = (argument) => {
    const winArrays = [
      //Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //Diagonal
      [0, 4, 8],
      [2, 4, 6],
      ]

      //Create loop to compare each win Condition to current gameboard
      for(let i = 0, i < winArrays.length, i++){
        //array destructuring to easily compare
        const [a, b, c] = winArrays[i]
        //if the values of the squares array at the three indices of the win condition are all X or all O, return X or O
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a]
        }
      }
      //if none of winArrays are equal to current game board, return no winner.
      return null;
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
