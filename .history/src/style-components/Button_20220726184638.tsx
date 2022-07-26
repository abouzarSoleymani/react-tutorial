import { css } from '@emotion/css'

interface ButtonProps {
  type: 'primary' | 'secondary'
}

const Button = ({ children, type }: ButtonProps) => (
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
export default Button
