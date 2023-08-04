import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
//Ocupamos de manera global
// window.axios = axios
// //seteamos la url de la api rest
// window.axios.defaults.baseURL = ""
// //Seteamos los headers
// window.axios.defaults.headers.common["Accept"] = "application/json"
// window.axios.defaults.headers.common["Content-Type"] = "application/json"
// window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
// window.axios.defaults.withCredentials = true
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)