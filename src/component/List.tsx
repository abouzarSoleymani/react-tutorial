import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { IUser } from './Model'

interface IProps {
  users: Array<IUser>
  onEdit?: (user: IUser) => void
  onDelete?: (user: IUser) => void
}

const list = (props: IProps) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 130 },
    { field: 'profession', headerName: 'profession', width: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 230,
      renderCell: (params): any => {
        return (
          <>
            <button type="button" onClick={() => props.onEdit?.(params.row)}>
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
        <DataGrid
          rows={props.users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default list
