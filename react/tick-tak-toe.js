import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex',
};

const squareStyle = {
  'width': '60px',
  'height': '60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': '#333',
};

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid',
};

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column',
};

const headerStyle = {
  'display': 'flex',
  'justify-content': 'space-between',
  'width': '90%',
  'margin': '10px auto 5px',
  'lineHeight': '40px',
  'fontWeight': 'bold',
  'fontSize': '16px',
};

const buttonStyle = {
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
};

function Square({ move, value }) {
  return (
    <button
      onClick={move}
      className="square"
      style={squareStyle}>
      {value}
    </button>
  );
}

function Board() {
  // текущий игрок, X или O
  const [player, setPlayer] = useState('X');
  // победитель, когда выиграет, X или O
  const [winner, setWinner] = useState(null);
  // ячейки 3х3, '' или X или O
  const [squares, setSquares] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  // сбросить игру к дефолту
  const reset = () => {
    setSquares([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setPlayer('X');
    setWinner(null);
  };
  // проверка на победителя, по диагоналям, по строкам, по столбцам
  const checkWinner = (nextSquares) => {
    if (nextSquares[0][0] === 'X' && nextSquares[1][1] === 'X' && nextSquares[2][2] === 'X') {
      return 'X';
    }
    if (nextSquares[0][0] === 'O' && nextSquares[1][1] === 'O' && nextSquares[2][2] === 'O') {
      return 'O';
    }
    if (nextSquares[0][2] === 'X' && nextSquares[1][1] === 'X' && nextSquares[2][0] === 'X') {
      return 'X';
    }
    if (nextSquares[0][2] === 'O' && nextSquares[1][1] === 'O' && nextSquares[2][0] === 'O') {
      return 'O';
    }

    for (let i = 0; i < 3; i++) {
      let rowX = 0;
      let rowO = 0;
      let colX = 0;
      let colO = 0;
      for (let j = 0; j < 3; j++) {
        if (nextSquares[i][j] === 'X') rowX++;
        if (nextSquares[i][j] === 'O') rowO++;
        if (nextSquares[j][i] === 'X') colX++;
        if (nextSquares[j][i] === 'O') colO++;
      }
      if (rowX === 3 || colX === 3) {
        return 'X';
      }
      if (rowO === 3 || colO === 3) {
        return 'O';
      }
    }
    return false;
  };
  // переключает игрока с X на O и наоборот
  const swapPlayer = () => setPlayer(currPlayer => currPlayer === 'X' ? 'O' : 'X');
  // клик по клеточке, записываем ход и проверяем победителя
  const nextMove = (row, col) => {
    if (row < 0 || row > 2 || col < 0 || col > 2) {
      return false;
    }
    if (winner || squares[row][col] !== '') {
      return false;
    }
    const nextSquares = [...squares];
    nextSquares[row][col] = player;
    setSquares(nextSquares);
    swapPlayer();
    const nextWinner = checkWinner(nextSquares);
    if (nextWinner) {
      setWinner(nextWinner);
      setTimeout(() => alert(`Winner is: ${nextWinner}`), 200);
    }
    return true;
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square move={() => nextMove(0, 0)} value={squares[0][0]}/>
          <Square move={() => nextMove(0, 1)} value={squares[0][1]}/>
          <Square move={() => nextMove(0, 2)} value={squares[0][2]}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square move={() => nextMove(1, 0)} value={squares[1][0]}/>
          <Square move={() => nextMove(1, 1)} value={squares[1][1]}/>
          <Square move={() => nextMove(1, 2)} value={squares[1][2]}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square move={() => nextMove(2, 0)} value={squares[2][0]}/>
          <Square move={() => nextMove(2, 1)} value={squares[2][1]}/>
          <Square move={() => nextMove(2, 2)} value={squares[2][2]}/>
        </div>
      </div>
      <div style={headerStyle}>
        {!winner && <div className="status">Next player: {player}</div>}
        {winner && <div className="winner">Winner: {winner}</div>}
        <button style={buttonStyle} onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
    </div>
  );
}

ReactDOM.render(<Game/>, document.getElementById('root'));
