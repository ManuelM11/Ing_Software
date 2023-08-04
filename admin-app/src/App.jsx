import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav"
import Doctors from "./Views/Doctors/Index"
import Login from "./Views/Login"
import Read from "./Views/Doctors/Read"
import Add from "./Views/Doctors/Add"
import Unidad from "./Views/Unidades/Index"
import AddUnidad from "./Views/Unidades/Add"

function App() {

  return (
    <BrowserRouter>
      <Nav/> 
        <Routes>
          <Route path = "/login" element={<Login/>}/>
              
        </Routes>
        <Routes>

              <Route path = "/unidad_referencia" element={<Unidad/>}/>
              <Route path='/doctors' element= {<Doctors/>}/>
              <Route path = "/read/:rut" element={<Read/>}/>
              <Route path = "/add" element={<Add/>}/>
              <Route path = "addUnidad" element= {<AddUnidad/>}/>
        </Routes>
       
    </BrowserRouter>
  )
    
}

export default App
