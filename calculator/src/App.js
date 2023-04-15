import { useState } from 'react'

const App = () => {
  const [result, setResult] = useState('')
  const [number, setNumber] = useState(0)
  const [calculation, setCalculation] = useState('')

  const add = () => {
    if (result === '') {
      setResult(parseInt(number))
    } else {
      setResult(parseInt(result) + parseInt(number))
    }

    setCalculation(calculation + ' + ' + number)
    setNumber('')
  }

  const subtract = () => {
    if (result === '') {
      setResult(parseInt(number) * -1)
      setCalculation('-' + calculation + ' - ' + number)
    } else {
      setResult(parseInt(result) - parseInt(number))
      setCalculation(calculation + ' - ' + number)
    }

    setNumber('')
  }

  const reset = () => {
    setResult('')
    setNumber(0)
    setCalculation('')
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div>
      <h2>Calculator</h2>

      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={reset}>Reset</button>
      <br></br>
      <input type="number" value={number} onChange={handleNumberChange} />
      <br></br>

      {result === '' ? null : (
        <>
          <p>{calculation.substring(2)} =</p>
          <p>
            <b>{result}</b>
          </p>
        </>
      )}
    </div>
  )
}

export default App
