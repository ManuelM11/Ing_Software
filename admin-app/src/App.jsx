import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import CreateDepartment from "./Views/Departments/Create"
import EditDepartment from "./Views/Departments/Edit"
import Employees from "./Views/Employees/Index"
import Graphic from "./Views/Employees/Graphic"
import Login from "./Views/Login"
import ProtectedRoutes  from './Components/ProtectedRoutes'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path = "/login" element={<Login/>}/>
           
              <Route path = "/create" element={<CreateDepartment/>}/>
              <Route path = "/edit/:id" element={<EditDepartment/>}/>
              <Route path = "/employees" element={<Employees/>}/>
              <Route path = "/graphic" element={<Graphic/>}/>
              {/* <Route path = "/login" element={<Login/>}/> */}
           
        </Routes>
    </BrowserRouter>
  )
    
}

export default App
