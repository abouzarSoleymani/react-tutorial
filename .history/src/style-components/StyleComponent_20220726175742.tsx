import './Style.css'
import './Style2.scss'
import style from './Style.module.css'

export default function StyleComponent() {
  const styles = {
    header4: {
      height: '110px',
      width: '100%',
      backgroundColor: 'green',
    },
  }
  return (
    <>
      /* css External Stylesheet */
      <div className="header" />
      <div className="header2" />
      /* CSS Modules */
      <div className={style.header3} />
      <div style={styles.header4} />
    </>
  )
}
