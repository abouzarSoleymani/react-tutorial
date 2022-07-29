import React, { useState, useEffect } from 'react'
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
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              placeholder="please input name"
              name="name"
              value={userEdit.name}
              onChange={onInputChange}
            />
          </label>

          <div className="form-error">too short</div>
        </div>
        <div className="form-row">
          <label htmlFor="profession">
            Profession
            <input
              id="profession"
              type="text"
              placeholder="please input profession"
              name="profession"
              value={userEdit.profession}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="age">
            Age
            <input
              id="age"
              type="number"
              placeholder="please input age"
              name="age"
              value={userEdit.age}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="form-row">
          {editing && <button type="submit">Update</button>}
          {!editing && <button type="submit">Add</button>}
          <button type="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
export default Edit
