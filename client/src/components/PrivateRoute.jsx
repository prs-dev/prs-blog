import { Outlet, Navigate } from 'react-router-dom'
export const PrivateRoute = () => {
    const user = localStorage.getItem('access_token')
    return user ? <Outlet /> : <Navigate to='/login' />
}

