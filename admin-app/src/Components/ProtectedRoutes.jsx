import React from 'react'
import {Navigate, Outlet} from "react-router-dom"
import {storage} from "../Storage/storage"
export const ProtectedRoutes = ({children}) => {
    const authUser = storage.get("authUser")
  if (!authUser){
    return <Navigate to= 'login'/>
  }
  return <Outlet/>
}

export default ProtectedRoutes