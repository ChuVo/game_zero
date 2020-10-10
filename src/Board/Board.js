import React from "react";
import Cell from "./Cell";

const Board = () => {

    return (
        <div className={'board'}>

            <div className="board__row">
                <Cell value={0} onClick={() => {console.log('click')}} />
                <Cell value={1} onClick={() => {console.log('click')}} />
                <Cell value={2} onClick={() => {console.log('click')}}  />
            </div>

            {/*<div className="board__row">*/}
            {/*    {renderCell(3)}*/}
            {/*    {renderCell(4)}*/}
            {/*    {renderCell(5)}*/}
            {/*</div>*/}

            {/*<div className="board__row">*/}
            {/*    {renderCell(6)}*/}
            {/*    {renderCell(7)}*/}
            {/*    {renderCell(8)}*/}
            {/*</div>*/}
        </div>
    )
};

export default Board;