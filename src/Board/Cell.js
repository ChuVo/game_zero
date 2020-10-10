import React from "react";

const Cell = (props) => {
    const {value, onClick} = props;
    
    return (
        <button className={'board__btn'} onClick={onClick} >
            {value}
        </button>
    )
};

export default Cell;