import './Style.css'
import './Style2.scss'
import styled from 'styled-components'
import style from './Style.module.css'

interface StyleProps {
  fontSize?: string
  fontWeight?: string
}

// Create a button variable and add CSS
const Title = styled.h1<StyleProps>`
  border: 2px solid red;
  color: red;
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize}px;
`
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
      {/* css External Stylesheet */}
      <div className="header" />
      {/* scss */}
      <div className="header2" />
      {/* CSS Modules - hash name and prevent duplicate class names Prevent copy style */}
      <div className={style.header3} />
      {/* Inline CSS */}
      <div style={styles.header4} />
      {/* Atomic CSS  One of the most popular atomic CSS frameworks out there is Tailwind, */}
      {/* styled-components */}
      <Title fontSize="30" backgroundColor="'bold'">
        {' '}
        styled component
      </Title>
    </>
  )
}
