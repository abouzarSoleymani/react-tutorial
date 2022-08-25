import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const onSubmitLogin = (e: any) => {
    console.log('submit', e)
  }
  return (
    <Routes>
      <Route path="/" element={<Home isLoggin={false} />} />
      <Route path="/login" element={<Login handleSubmit={onSubmitLogin} />} />
    </Routes>
  )
}

export default App
