import { Button } from '@mui/material'
import React, { useReducer, CSSProperties } from 'react'

export interface StylesDictionary {
  [Key: string]: CSSProperties
}
const styles: StylesDictionary = {
  counteContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  actions: {
    marginTop: '10px',
  },
  button: {
    margin: '2px 5px',
  },
}
// An enum with all the types of actions to use in our reducer
// eslint-disable-next-line no-shadow
enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind
  payload: number
}

// An interface for our state
interface CountState {
  count: number
}

// Our reducer function that uses a switch statement to handle our actions
const counterReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      }
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count ? state.count - payload : 0,
      }
    default:
      return state
  }
}
// An example of using the `useReducer` hooks with our reducer function and an initial state
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  return (
    <div style={styles.counteContainer}>
      Count: {state.count}
      {/* Calling our actions on button click */}
      <div style={styles.actions}>
        <Button
          style={styles.button}
          variant="outlined"
          type="button"
          onClick={() =>
            dispatch({ type: CountActionKind.DECREASE, payload: 5 })
          }
        >
          -
        </Button>
        <Button
          style={styles.button}
          variant="contained"
          type="button"
          onClick={() =>
            dispatch({ type: CountActionKind.INCREASE, payload: 5 })
          }
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default Counter
