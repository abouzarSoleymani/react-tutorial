import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome13 from './function-components/Welcome13'
import StyleComponent from './style-components/StyleComponent'
import Second from './state-component/Second'

function App() {
  const userList: any = [
    { id: 0, name: 'ali', age: 20 },
    { id: 1, name: 'reza', age: 30 },
    { id: 2, name: 'mohammad', age: 35 },
  ]
  return (
    <>
      <Welcome13 users={userList} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StyleComponent />} />
          <Route path="/second">
            <Route path=":number" element={<Second />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
