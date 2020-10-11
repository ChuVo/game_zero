import React, {useState} from "react";
import Board from "./Board/Board";
import { calculateWinner } from "./helpers/calculateWinner";

import './styles/index.css'

const Game = () => {
    const [isStart, setIsStart] = useState(true);
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState(0);
    let status = '';
    const current = history[stepNumber];

    const winner = calculateWinner(current.squares);

    if (winner) {
        status = 'Winner is ' + winner;
    } else {
        status = 'Next player is:' + (xIsNext ? 'X' : '0');
    }

    const handleClick = (i) => {
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) return;

        if (!isStart && history.length !== stepNumber +1) return;

        let nextStep = stepNumber + 1;

        squares[i] = xIsNext ? 'X': '0';
        setXIsNext(!xIsNext);
        setHistory(history.concat([{squares}]));
        setStepNumber(nextStep);
        setIsStart(true);
    }

    const jumpTo = (move) => {
        setIsStart(false);
        setStepNumber(move);
        setXIsNext((move %2) ? false : true);
    };

    const startNow = () => {
        setXIsNext(true);
        setHistory([{squares: Array(9).fill(null)}]);
        setStepNumber(0);
    }

    const paintHistory = () => {
        return history.map((step, move) => {
            const desc = move ? ('Move #' + move) : 'Game start';

            return (
                <li key={move}>
                    <a href="#" onClick={()=> jumpTo(move)}>{desc}</a>
                </li>
            );
        })
    };

    return (
      <div className={'game'}>
          <div className="game__board">
              <Board squares={current} onClick={handleClick} />
          </div>
          <div className="game__info">
              <div>{status}</div>
              <ul>{paintHistory()}</ul>
              <button onClick={() => startNow()}>Start now</button>
          </div>
      </div>
    );
};

export default Game;