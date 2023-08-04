import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Add = () => {
  const [refList, setRefList] = useState([{'nombre':'','id':''}])
  const [refName, setRefName] = useState("")
  const [unidad, setUnidad] = useState({
    nombre: "",
    region:"",
    ciudad:"",
    calle:""
    
  });
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setUnidad((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      await axios.post("http://localhost:5000/registerUnidad", unidad);
      navigate("/unidad_referencia");
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Añadir una nueva Unidad</h2>
        <div className='row'>
            <div className='col-md-12'>
                <h3>Unidad Referencia</h3>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Nombre:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre" name="nombre" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Region:</label>
                        <input type="email" className="form-control" id="region" placeholder="Ingrese la region" name="region" onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Ciudad:</label>
                        <input type="text" className="form-control" id="ciudad" placeholder="Ingrese la ciudad" name="ciudad" onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> Calle:</label>
                        <input type="text" className="form-control" id="calle" placeholder="Ingrese la calle" name="calle" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Añadir Unidad</button>
                    <Link to="/Unidades">Ver todas las unidades</Link>
                </form>
            </div>
        </div>
</div>
  );
};
 
export default Add;