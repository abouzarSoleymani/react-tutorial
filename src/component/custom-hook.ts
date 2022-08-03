import { useState } from 'react'

// add a return type here
export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = () => setValue(!value)
  return [value, toggleValue]
}

export default useToggle
