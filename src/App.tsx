import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const onSubmitLogin = (e: any) => {
    console.log('submit', e)
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={['user', 'admin']} outlet={<Home />} />
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
