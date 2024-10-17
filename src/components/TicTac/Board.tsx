import React, { useState } from "react";
import Cell from "./Cell";
const Board: React.FC<{size: number}> = (props) => {
    const [cells, updateSells] = useState(Array(props.size **2).fill(null))
    const [move, changeMove] = useState(true)
    const [isEnd, checkIsEnd] = useState(false)
    const checkArrayTemplate = (array: string[], newCells: string[], index: number) => {
        if (array.every(element => element === newCells[index]) && newCells[index] !== null) {
            checkIsEnd(true)
            alert(`${newCells[index]} is win`)
            return true
        }
        return false
    }
    const checkEnd = (newCells: string[], index: number) => {
        const rowIndex = Math.floor(index / props.size)
        const columnIndex = index % props.size
        //Check row
        const arrRow = newCells.slice(rowIndex * props.size, rowIndex * props.size + props.size)
        if(checkArrayTemplate(arrRow, newCells, index)) return false
        let arrColumn = []
        for (let j = 0; j < props.size; j++) {
            arrColumn.push(newCells[j * props.size + columnIndex])
        }
        if(checkArrayTemplate(arrColumn, newCells, index)) return false
        let mainDiagonal = []
        for (let j = 0; j < props.size; j++) {
            mainDiagonal.push(newCells[j * (props.size + 1)])
        }
        if(checkArrayTemplate(mainDiagonal, newCells, index)) return false
        let antiDiagonal = []
        for (let j = 0; j < props.size; j++) {
            antiDiagonal.push(newCells[j * props.size - (props.size - 1 - j)])
        }
        if(checkArrayTemplate(antiDiagonal, newCells, index)) return false
    }
    const handleMove = (index: number) => {
        if(isEnd || cells[index]) return
        const newCells = [...cells]
        newCells[index] = move ? 'x' : 'o'
        changeMove(!move)
        if(!checkEnd(newCells, index))
            updateSells(newCells)
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