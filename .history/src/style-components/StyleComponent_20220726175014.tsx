import './Style.css'
import './Style2.scss'
import style from './Style.module.css'

export default function StyleComponent() {
  const styles3 = {
    hei
    backgroundColor: 'green',
  }
  return (
    <>
      <div className="header" />
      <div className="header2" />
      <div className={style.header3} />
      <div className={style.header3} />
    </>
  )
}
