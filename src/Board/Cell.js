import React from "react";

const Cell = (props) => {
    const { value, onClick } = props;
    console.log(value);

    return (
        <button className={'board__btn'} onClick={() => {
            console.log(value);
            onClick(value)
        }} >
            {value}
        </button>
    )
};

export default Cell;