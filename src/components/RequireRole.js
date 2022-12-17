import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";
const RequireRole = ({allowedRoles}) => {

  const {auth} = useAuth()
  const decode = auth?.accessToken ? jwtDecode(auth.accessToken):undefined

  const roles = decode.UserInfo.roles || []

  return (

    roles.find(role=> allowedRoles.includes(role)) ? <Outlet /> :  <Navigate to={'/unauthorized'} /> 
  )
}

export default RequireRole