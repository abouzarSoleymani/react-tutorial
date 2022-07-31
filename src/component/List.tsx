import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { IUser } from './Model'
import './Edit.scss'

interface IProps {
  users: Array<IUser>
  onEdit?: (user: IUser) => void
  onDelete?: (user: IUser) => void
}

const list = (props: IProps) => {
  const navigate = useNavigate()
  const goToEdit = (id: number): void => {
    navigate(`/edit/${id}`)
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'username', headerName: 'username', width: 150 },
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 230,
      renderCell: (params): any => {
        return (
          <>
            <button type="button" onClick={() => goToEdit(params.row.id)}>
              edit
            </button>
            <button type="button" onClick={() => props.onDelete?.(params.row)}>
              delete
            </button>
          </>
        )
      },
    },
  ]

  return (
    <div className="user-table">
      <h1>View users</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={props.users} columns={columns} hideFooterPagination />
      </div>
    </div>
  )
}

export default list
