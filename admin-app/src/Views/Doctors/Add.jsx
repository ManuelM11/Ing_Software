import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Add = () => {
  const [refList, setRefList] = useState([{'nombre':'','id':''}])
  const [refName, setRefName] = useState("")
  const [users, setUser] = useState({
    nombre: "",
    email: "",
    rut: "",
    profesion: "",
    telefono: "",
    direccion: "",
    unidad: ""
    
  });
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() =>{
    const fetchData = async ()=>{
        const response = await fetch(`http://localhost:5000/fetchUnidad`);
        const newData = await response.json();
        setRefList(newData);
        // console.log(newData);
    };
    fetchData();
}, [])
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/registerDoctor", users);
      navigate("/Doctors");
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeRef = (event) =>{
    setRefName(event.target.value);
}
 
  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Añadir un nuevo funcionario</h2>
        <div className='row'>
            <div className='col-md-12'>
                <h3>Funcionario</h3>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Nombre Completo:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre completo" name="nombre" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingrese el email" name="email" onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Rut:</label>
                        <input type="text" className="form-control" id="password" placeholder="Ingrese el rut" name="rut" onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Profesion:</label>
                        <input type="text" className="form-control" id="profesion" placeholder="Ingrese la profesión" name="profesion" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Telefono:</label>
                        <input type="text" className="form-control" id="telefono" placeholder="Ingrese el teléfono" name="telefono" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Direccion:</label>
                        <input type="text" className="form-control" id="direccion" placeholder="Ingrese la direccion" name="direccion" onChange={handleChange} />
                    </div>
                    <div className="form-label">
                      <label className="form-label"> Escoja la Unidad de Referencia:</label>
                      <select className="form-control" id = "unidad" name = "unidad" onChange={handleChange}>
                      <option value="">Unidad de Referencia</option>

                      {refList.map(ref => (
                      <option value={ref.nombre} key={ref.id} >{ref.nombre}</option>
                                                    ))
                                                    }

                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Añadir Funcionario</button>
                    <Link to="/doctors">Ver todos los funcionarios</Link>
                </form>
            </div>
        </div>
</div>
  );
};
 
export default Add;