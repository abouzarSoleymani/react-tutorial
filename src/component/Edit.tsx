import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { IBaseUser, IUser } from './Model'

interface IProps {
  user: IUser
  onUpdateUser: (id: number | null, user: IUser) => void
  setEdit: (bool: boolean) => void
  onAddUser: (user: IBaseUser) => void
  editing: boolean
}

const Edit = ({ user, onUpdateUser, setEdit, editing, onAddUser }: IProps) => {
  const [userEdit, setUser] = useState(user)

  useEffect(() => {
    setUser(user)
  }, [user])

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!userEdit.profession || !userEdit.name) {
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
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <form className="form-edit" onSubmit={onFormSubmit}>
            <TextField
              label="name"
              id="outlined-size-normal"
              defaultValue="Normal"
              value={userEdit.name}
              onChange={onInputChange}
            />
            <TextField
              label="profession"
              id="outlined-size-normal"
              defaultValue="Normal"
              value={userEdit.profession}
              onChange={onInputChange}
            />
            <TextField
              label="age"
              id="outlined-size-normal"
              defaultValue="Normal"
              value={userEdit.age}
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
              <Button variant="outlined" onClick={() => setEdit(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </div>
  )
}
export default Edit
