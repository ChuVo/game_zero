import React, {useEffect, useMemo, useState} from "react";
import Cell from "./Cell";

const Board = (props) => {
    const { squares, onClick } = props;
    const values = squares.squares;

    const renderCell = (i) => {
        return (
            <button className={'board__btn'} onClick={() => {onClick(i)}} >
                {values[i]}
            </button>
        )
    }

    return (
        <div className={'board'}>
            <div className="board__row">
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div className="board__row">
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>

            <div className="board__row">
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </div>
    )
};

export default Board;