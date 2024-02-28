import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Component/Context/AuthProvider'
import AllRoutes from './Component/Routes/AllRoutes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<AllRoutes/>}/>
    </BrowserRouter>
  </React.StrictMode>
)
