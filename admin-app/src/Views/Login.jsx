import React, { useState, useEffect } from "react";
import axios from "axios"
export const Login = () => {
  const url = "http://localhost:5000/fetchPatients";
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    return await axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  console.log(data)
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
        </form>
      </div>
      
    </div>
  )
}

export default Login