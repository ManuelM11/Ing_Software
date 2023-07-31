import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import storage from "../Storage/storage"
export const Nav = () => {
    const go = useNavigate()
    const logout = async () =>{
        storage.remove("authToken")
        storage.remove("authUser")
        storage.clear()
    }
  return (
    <div>Nav</div>
  )
}

export default Nav