import { css, cx } from '@emotion/css'

const Button = ({ children }: any) => {
  return <button   className={css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`} type="button">{children}</button>
}
export default Button
