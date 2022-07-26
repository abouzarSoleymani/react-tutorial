import { css, cx } from '@emotion/css'
type primary
export interface ButtonProps {
  children: any,
  // Trying to figure out how to define 3 possible button type values with type="button" as the default value if unset
   type: ('button' | 'submit' | 'reset') = 'button', // this is obviously wrong...
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      className={css`
        padding: 32px;
        background-color: ${type === 'primary' ? 'orange' : 'blue'};
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: white;
        }
      `}
      type="button"
    >
      {children}
    </button>
  )
}
export default Button
