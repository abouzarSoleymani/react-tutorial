import { css, cx } from '@emotion/css'
type primary
export interface ButtonProps {
  children: any,
   type: ('primary' | 'submit' | 'reset') = 'button', // this is obviously wrong...
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
