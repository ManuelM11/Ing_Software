import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Unidades = () => {
  const [unidades, setUnidades] = useState([]);
 
  useEffect(() => {
    const fetchAllUnidades = async () => {
      try {
        const res = await axios.get("http://localhost:5000/fetchUnidad");
        setUnidades(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUnidades();
  }, []);
 
  console.log(unidades);
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteUnidad/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Todas las Unidades de Referencia</h2>
        <div className='row'>
            <div className='col-md-12'>
            <p><Link to="/addUnidad" className="btn btn-success">Añadir Unidad de Referencia</Link></p>
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Region</th>
                    <th>Ciudad</th>
                    <th>Calle</th>
                    <th>Activo (1 si, 0 no)</th>
                </tr>
            </thead>
            <tbody>
                {
                    unidades.map((uni, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{uni.nombre} </td>
                                <td>{uni.region} </td>
                                <td>{uni.ciudad}</td>
                                <td>{uni.calle}</td>
                                <td>{uni.status}</td>
                                <td>
                                    <button onClick={()=>handleDelete(uni.id)} className="btn btn-danger">Eliminar</button>
                                    <button onClick={()=> console.log("s")} className="btn btn-info mx-2">Activar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        </div>
    </div>
  );
};
 
export default Unidades;