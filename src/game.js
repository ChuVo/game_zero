import React from "react";
import Board from "./Board/Board";

const Game = () => {
    return (
      <div className={'game'}>
          <div className="game__board">
              <Board />
          </div>
          <div className="game__info">
              <div>{'status'}</div>
              <ul>{/*history*/}</ul>
          </div>
      </div>
    );
};

export default Game;