import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../redux'

type ProtectedRouteProps = {
  allowedRoles: string[]
  outlet: JSX.Element
}

const ProtectedRoute = ({ allowedRoles, outlet }: ProtectedRouteProps) => {
  const { userInfo } = useAppSelector((state) => state.user)
  const location = useLocation()

  if (userInfo && allowedRoles.includes(String(userInfo?.role))) {
    return outlet
  }
  return <Navigate to="/login" />
}

export default ProtectedRoute
