import { css, cx } from '@emotion/css'

const Button = ({ children, type }: any) => {
  return (
    <button
      className={css`
        padding: 32px;
        background-color: ${};
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
