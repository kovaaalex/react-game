import React, { useState } from "react";
import Cell from "./Cell";
const Board: React.FC<{size: number}> = (props) => {
    const [cells, updateSells] = useState(Array(props.size **2).fill(null))
    const [move, changeMove] = useState(true)
    const [isEnd, checkIsEnd] = useState(false)
    const checkEnd = (newCells: string[], index: number) => {
        const rowIndex = Math.floor(index / props.size)
        const columnIndex = index % props.size
        //Check row
        const arrRow = newCells.slice(rowIndex * props.size, rowIndex * props.size + props.size)
        if (arrRow.every(element => element === newCells[index]) && newCells[index] !== null) {
            checkIsEnd(true)
            alert(`${newCells[index]} is win`)
            return
        }
        //Check Column
        let arrColumn = []
        for (let j = 0; j < props.size; j++) {
            arrColumn.push(newCells[j * props.size + columnIndex])
        }
        if(arrColumn.every(element => element === newCells[index]) && newCells[index] !== null) {
            if(!isEnd)
            checkIsEnd(true)
            alert(`${cells[index]} is win`)
            return
        }
        let mainDiagonal = []
        for (let j = 0; j < props.size; j++) {
            mainDiagonal.push(newCells[j * (props.size + 1)])
        }
        if(mainDiagonal.every(element => element === newCells[index]) && newCells[index] !== null) {
            checkIsEnd(true)
            alert(`${cells[index]} is win`)
            return
        }
        let antiDiagonal = []
        for (let j = 0; j < props.size; j++) {
            antiDiagonal.push(newCells[j * props.size - (props.size - 1 - j)])
        }
        if(antiDiagonal.every(element => element === newCells[index]) && newCells[index] !== null) {
            checkIsEnd(true)
            alert(`${cells[index]} is win`)
            return
        }
        //Check diagonales
        
    }
    const handleMove = (index: number) => {
        if(isEnd && cells[index]) return
        const newCells = [...cells]
        newCells[index] = move ? 'x' : 'o'
        updateSells(newCells)
        changeMove(!move)
        checkEnd(newCells, index)
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