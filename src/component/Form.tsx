import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { IBaseUser, IUser } from './Model'

import './Form.scss'

interface IProps {
  user: IUser
  onUpdateUser: (id: number | null, user: IUser) => void
  setEdit: (bool: boolean) => void
  onAddUser: (user: IBaseUser) => void
}

const Form = ({ user, onUpdateUser, setEdit, onAddUser }: IProps) => {
  const [userEdit, setUser] = useState(user)
  const navigate = useNavigate()
  const { id } = useParams()
  const editing = !!id
  const callEditUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((resUser) => setUser(resUser))
  }

  useEffect(() => {
    if (editing) {
      callEditUser()
    }
    // setUser(user)
  }, [])
  const onCancelForm = () => {
    setEdit(false)
    navigate('/')
  }
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!userEdit.username || !userEdit.name) {
      return
    }
    if (editing) {
      onUpdateUser(userEdit.id, userEdit)
    } else {
      onAddUser(userEdit)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...userEdit, [name]: value })
  }

  return (
    <div className="user-form">
      <h1>edit users</h1>
      <Box>
        <div>
          <form className="form-edit" onSubmit={onFormSubmit}>
            <TextField
              label="name"
              name="name"
              id="outlined-size-normal"
              value={userEdit.name}
              onChange={onInputChange}
            />
            <TextField
              label="username"
              name="username"
              id="outlined-size-normal"
              value={userEdit.username}
              onChange={onInputChange}
            />
            <TextField
              label="email"
              name="email"
              id="outlined-size-normal"
              value={userEdit.email}
              onChange={onInputChange}
            />
            <div className="actions-form">
              {editing && (
                <Button type="submit" variant="contained">
                  Update
                </Button>
              )}
              {!editing && (
                <Button type="submit" variant="contained">
                  Add
                </Button>
              )}
              <Button variant="outlined" onClick={() => onCancelForm()}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </div>
  )
}
export default Form
