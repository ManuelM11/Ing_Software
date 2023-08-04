import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
const Read = () => {
    const {rut} = useParams();
    const [user, setUsers] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:5000/fetchDoctorByRut/"+rut)
        .then(res => {
            console.log(res)
            setUsers(res.data[0]);
        })
        .catch(err => console.log(err))
    }, []);
 
  return (
    <div className="container">
        <div className='row'>
        <div className='col-md-12'>
        <h1>Información del Funcionario</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>.</th>
                        <th>Nombre</th>
                        <th>RUT</th>
                        <th>Email</th> 
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Profesion</th>
                        <th>Unidad de Referencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.nombre}</td>
                        <td>{user.rut}</td>
                        <td>{user.email}</td>
                        <td>{user.telefono}</td>
                        <td>{user.direccion}</td>
                        <td>{user.profesion}</td>
                        <td>{user.unidad}</td>
                    </tr>
                </tbody>
            </table>
      </div>
      </div>
    </div>
  );
};
 
export default Read;