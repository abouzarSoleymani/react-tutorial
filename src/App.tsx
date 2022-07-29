import { useState } from 'react'
import './App.css'
import Edit from './component/Edit'
import List from './component/List'
import { IBaseUser, IUser } from './component/Model'

const defaultUsers: Array<IUser> = [
  { profession: 'lily', name: 'lily hh', id: 1, age: 18 },
  { profession: 'bob', name: 'bob haha', id: 2, age: 19 },
  { profession: 'bob2', name: 'bob haha', id: 3, age: 19 },
]

const initCurrentUser: IUser = { profession: '', name: '', age: 10, id: null }

function App() {
  const [users, setUsers] = useState(defaultUsers)
  const [editUser, setEditUser] = useState(initCurrentUser)
  const [editing, setEdit] = useState(false)

  const onCurrentUser = (user: IUser) => {
    setEditUser(user)
    setEdit(true)
  }

  const onAddUser = (newUser: IBaseUser): void => {
    const id = users.length + 1
    setUsers([...users, { ...newUser, id }])
  }
  const onUpdateUser = (id: number | null, newUser: IUser): void => {
    setEdit(false)
    setUsers(users.map((i) => (i.id === id ? newUser : i)))
  }

  const onDeleteUser = (currentUser: IUser): void => {
    setUsers(users.filter((i) => i.id !== currentUser.id))
  }

  return (
    <>
      <h2>{`bool2: ${editing}`}</h2>
      <List users={users} onEdit={onCurrentUser} onDelete={onDeleteUser} />
      <Edit
        user={editUser}
        onUpdateUser={onUpdateUser}
        onAddUser={onAddUser}
        setEdit={setEdit}
        editing={editing}
      />
    </>
  )
}

export default App
