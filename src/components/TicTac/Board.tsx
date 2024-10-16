import React, { useState } from "react";
import Cell from "./Cell";
const Board: React.FC<{size: number}> = (props) => {
    const [cells, updateSells] = useState(Array(props.size **2).fill(null))
    const [move, changeMove] = useState(true)
    const [isEnd, checkIsEnd] = useState(false)
    const handleMove = (index: number) => {
        if(isEnd && cells[index]) return
        const newCells = [...cells]
        newCells[index] = move ? 'x' : 'o'
        updateSells(newCells)
        changeMove(!move)
    }
    const renderCells = () => {
        return cells.map((cell, index) => {
            return (
                <Cell
                    key={index}
                    value={cell} 
                    onClick={() => handleMove(index) }/>
            )
        })
    }
    return (
        <div className="boardContainer">
            <h3>Board size is {props.size}</h3>
            <div className="board">
                {renderCells()}
            </div>
        </div>
    )
}
export default Board