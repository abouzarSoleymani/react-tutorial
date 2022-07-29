import { IUser } from './Model'

interface IProps {
  users: Array<IUser>
  onEdit?: (user: IUser) => void
  onDelete?: (user: IUser) => void
}

const list = (props: IProps) => {
  return (
    <div className="user-table">
      <h1>View users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>profession</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((i: IUser) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.profession}</td>
                <td>
                  <button type="button" onClick={() => props.onEdit?.(i)}>
                    edit
                  </button>
                  <button type="button" onClick={() => props.onDelete?.(i)}>
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>no users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default list
