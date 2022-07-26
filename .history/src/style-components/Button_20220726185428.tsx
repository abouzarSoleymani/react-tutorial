import { css } from '@emotion/css'

interface ButtonProps {
  children: any
  type: 'primary' | 'secondary'
}

const Button = ({ children, type }: ButtonProps) => (
  <button
    className={css`
      padding: 10px 30px;
      background-color: ${type === 'primary' ? 'orange' : 'blue'};
      font-size: 24px;
      border-radius: 4px;
      border: none;
      curoser: pointer;
      &:hover {
        color: white;
      }
    `}
    type="button"
  >
    {children}
  </button>
)
export default Button
