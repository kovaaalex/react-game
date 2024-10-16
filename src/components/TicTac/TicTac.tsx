import React, { useState } from 'react';
import Board from './Board';
import './TicTac.css'

const size: number = 3

const TicTac: React.FC = () => {
    return (
        <>
            <h2>Tic tac</h2>
            <Board size={size} />
        </>
    )
}

export default TicTac;