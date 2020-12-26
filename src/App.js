import React, { useState} from 'react'
import './App.css';

import Display from './Components/Display'
import Numbers from './Components/Numbers'

function App() {
  
  const [number, getNumber] = useState(0);
  let [expression, setExpression] = useState([]);
  const [storedNumber, setStoredNumber] = useState('')

  let input, operatorFlag, result

  const setNumber = (value) => {
    setExpression([...expression, value])
      input = getNumber(value);
      handleSetStoredNumber(value)
  }
  
  function handleOperator(value) {
    setExpression([...expression, value])

    if (value === '+') {
      operatorFlag = 'plus'
      console.log(operatorFlag)
    }
    else if (value === '-') {
      operatorFlag = 'minus'
      console.log(operatorFlag)
    }
    else if (value === 'x') {
      operatorFlag = 'multiply'
      console.log(operatorFlag)
    }
    else if (value === '÷') {
      operatorFlag = 'divide'
      console.log(operatorFlag)
    }
  }

  function handleResult (){
    console.log(operatorFlag)
    if (operatorFlag === 'plus') {
      result = storedNumber + input
      console.log(result)
    }
  }

  function clearNumbers(value) {
    console.log('poops')
    input = ' '
    setStoredNumber(' ')

  }

  const handleSetStoredNumber = (value) => {
    setStoredNumber(value)
    getNumber('')
  }
  
  return (
    <div className="App">
      <div className='calc-header'>
        <Display
          number={number}
          expression={expression}
        />
      </div>
      <div className='calc-body'>
        <Numbers
          setNumber={setNumber}
          handleResult={handleResult}
          handleOperator={handleOperator}
          clearNumbers={clearNumbers}
        />
      </div>
    </div>
  );
}

export default App;
