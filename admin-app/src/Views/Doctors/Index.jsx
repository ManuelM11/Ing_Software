import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Users = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/fetchDoctor");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);
 
  console.log(users);
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Todos los funcionarios</h2>
        <div className='row'>
            <div className='col-md-12'>
            <p><Link to="/add" className="btn btn-success">Añadir funcionario</Link></p>
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                    <th>RUT</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((doctor, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{doctor.nombre} </td>
                                <td>{doctor.email} </td>
                                <td>{doctor.rut}</td>
                                <td>
                                    <Link to={`/read/${doctor.rut}`} className="btn btn-success mx-2">Más info</Link>
                                    <Link to={`/update/${doctor.rut}`} className="btn btn-info mx-2">Editar</Link>
                                    <button onClick={()=>handleDelete(doctor.rut)} className="btn btn-danger">Eliminar</button>
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
 
export default Users;