import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface User {
  firstName: string
  lastName: string
  age: number
}

const initialState: User = {
  firstName: 'ali',
  lastName: 'soleymani',
  age: 32,
}

const Second = () => {
  const { number } = useParams()

  const [state, setState] = useState(initialState)
  const updateState = (stateName: string, value: any) => {
    setState({
      ...state,
      [stateName]: value,
    })
  }
  useEffect(() => {
    updateState('age', number)
  })
  return (
    <>
      <h1>fistName: {state.firstName} </h1>
      <h2>lastName: {state.lastName} </h2>
      <h3>age: {state.age} </h3>
      <button
        type="button"
        onClick={() => {
          updateState('lastName', 'mohammadi')
        }}
      >
        change
      </button>
    </>
  )
}
export default Second
