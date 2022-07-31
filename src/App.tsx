import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Edit from './component/Edit'
import List from './component/List'
import { IBaseUser, IUser } from './component/Model'
import { fetchUsers } from './component/Users.service'

const defaultUsers: Array<IUser> = []

const initCurrentUser: IUser = { username: '', name: '', email: '', id: null }
const Rootes = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [editUser, setEditUser] = useState(initCurrentUser)
  const [editing, setEdit] = useState(false)
  const navigate = useNavigate()

  // const fetchUsers = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then(setUsers)
  // }

  useEffect(() => {
    const fetchData = async () => {
      // Here we get users: User[]
      const usersList = await fetchUsers()
      setUsers(usersList)
    }

    fetchData()
    // fetchUsers()
  }, [])

  const onCurrentUser = (user: IUser) => {
    setEditUser(user)
    setEdit(true)
  }

  const onAddUser = (newUser: IBaseUser): void => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setUsers([...users, { ...json }])
        navigate('/')
      })
  }
  const onUpdateUser = (id: number | null, newUser: IUser): void => {
    setEdit(false)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setUsers(users.map((user) => (user.id === id ? json : user)))
        navigate('/')
      })
  }

  const onDeleteUser = (currentUser: IUser): void => {
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setUsers(users.filter((user) => user.id !== currentUser.id))
      })
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <List users={users} onEdit={onCurrentUser} onDelete={onDeleteUser} />
        }
      />
      <Route path="/edit">
        <Route
          path=":id"
          element={
            <Edit
              user={editUser}
              onUpdateUser={onUpdateUser}
              onAddUser={onAddUser}
              setEdit={setEdit}
            />
          }
        />
      </Route>
      <Route
        path="/add"
        element={
          <Edit
            user={editUser}
            onUpdateUser={onUpdateUser}
            onAddUser={onAddUser}
            setEdit={setEdit}
          />
        }
      />
    </Routes>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Rootes />
    </BrowserRouter>
  )
}

export default App
