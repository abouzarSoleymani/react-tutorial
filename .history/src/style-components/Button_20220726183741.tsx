import { css, cx } from '@emotion/css'

interface ButtonProps {
  children: any
  type: 'primary' | 'secondary'
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      className={css`
        padding: 32px;
        background-color: ${type === '' ? 'orange' : 'blue'};
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
