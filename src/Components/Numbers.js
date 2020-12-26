import React from 'react'

export default function Numbers({setNumber, handleOperator, handleResult, clearNumbers}) {

    return (
        <div className='button-container'>
            
            <div className='keypad'>
                <div className='row'>
                    <button onClick={() => setNumber(7)}>7</button>
                    <button onClick={() => setNumber(8)}>8</button>
                    <button onClick={() => setNumber(9)}>9</button>
                </div>

                <div className='row'>
                    <button onClick={() => setNumber(4)}>4</button>
                    <button onClick={() => setNumber(5)}>5</button>
                    <button onClick={() => setNumber(6)}>6</button>
                </div>

                <div className='row'>
                    <button onClick={() => setNumber(1)}>1</button>
                    <button onClick={() => setNumber(2)}>2</button>
                    <button onClick={() => setNumber(3)}>3</button>
                </div>

                <div className='row'>
                    <button onClick={() => setNumber(0)}>0</button>
                </div>
            </div>
            <div className='operators'>
                <button onClick={() => handleOperator('-')} >-</button>
                <button onClick={() => handleOperator('+')} >+</button>
                <button onClick={() => handleOperator('÷')} >÷</button>
                <button onClick={() => handleOperator('x')} >x</button>
                <button onClick={handleResult} >=</button>
                <button onClick={clearNumbers} > C </button>
            </div>
        </div>
    )
}
