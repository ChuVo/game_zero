import React, {useState} from "react";
import Board from "./Board/Board";

import './styles/index.css'

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState(0);

    const status = 'Next player is:' + (xIsNext ? 'X' : '0');
    const current = history[stepNumber];

    const handleClick = (i) => {
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        let nextStep = stepNumber + 1;

        squares[i] = xIsNext ? 'X': '0';

        setXIsNext(!xIsNext);

        setHistory(history.concat([{squares}]));
        setStepNumber(nextStep);
    }

    return (
      <div className={'game'}>
          <div className="game__board">
              <Board squares={current} onClick={handleClick} />
          </div>
          <div className="game__info">
              <div>{status}</div>
              <ul>{/*history*/}</ul>
          </div>
      </div>
    );
};

export default Game;