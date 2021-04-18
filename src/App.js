import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xLocation: true,
      oLocation: false,
      gameOver: false,
      winningLetter: "",
      gameOverLoser: false
    }
  }

  handleGamePlay = (index) => {
    const { squares, xLocation, oLocation, gameOver,gameOverLoser } = this.state
    console.log(index)

    if(gameOverLoser === true && gameOver === false){
    } else if(gameOver === true){
    } else if(squares[index] !== null){
    } else if(xLocation === true){
      squares[index] = "🐅"
      this.setState({squares: squares, xLocation: false,
        oLocation: true})
        console.log(squares)
    } else if (oLocation === true){
      squares[index] = "🐆"
      this.setState({squares: squares, xLocation: true,
        oLocation: false})
        console.log(squares)
    }
  }

  checkArrayFull = () => {
    const { squares, } = this.state
    for(let i = 0; i < squares.length; i++){
      if ( squares[i] === null )
    {
      return this.setState({ gameOverLoser: false })
    }
  }
  return this.setState({ gameOverLoser: true })
  }


  //have array squares filled with Xs and Os
  //we want to compare squares to win condition arrays
  //works for both X and O wins

  checkWinner = (argument) => {
    const { squares } = this.state
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
      for(let i = 0; i < winArrays.length; i++){
        //array destructuring to easily compare
        const [a, b, c] = winArrays[i]
        //if the values of the squares array at the three indices of the win condition are all X or all O, return X or O
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          this.setState({ gameOver: true, winningLetter: squares[a] })
          return squares[a]
        }
      }
      //if none of winArrays are equal to current game board, return no winner.
      return null;
    }
    //console.log(this.checkWinner(this.state.squares[1]))

    restartGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xLocation: true,
      oLocation: false,
      gameOver: false,
      winningLetter: "",
      gameOverLoser: false,

    })
  }


  render(){
    return(
      <>
        <h1>Jungle Cat Showdown</h1>

        { this.state.xLocation &&
          <div className="playerturn">It's 🐅 turn!</div>
        }
        { this.state.oLocation &&
          <div className="playerturn">It's 🐆 turn!</div>
        }

        <div className="gameboard">
        { this.state.squares.map((value,index) => {
          return(
            <Square
              value={ value }
              key={ index }
              index={ index }
              handleGamePlay={ this.handleGamePlay }
              checkWinner={ this.checkWinner }
              checkArrayFull={ this.checkArrayFull }
            />
          )
        })}
        </div>
        <br/>
        <div className="resetbutton">
          <button onClick={ this.restartGame }>Play Again</button>
        </div>

        { this.state.gameOver &&
          <div className="message">Congrats { this.state.winningLetter } you're the toughest cat in the jungle!</div>
        }
        { this.state.gameOverLoser &&
          <div className="message">Sorry bud! No one won.</div>
        }
      </>
    )
  }
}
export default App
