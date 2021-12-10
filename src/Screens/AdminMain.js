import React from 'react'
import AdminLogin from '../components/AdminLogin'
import AdminNav from '../components/AdminNav'
import SlideBar from '../components/SlideBar'
import AdminUserControl from './AdminUserControl'
function AdminMain() {
    return (
        <>
         <div  style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
           
            <SlideBar/>
            <AdminLogin/>
            </div>
    )
        </>
    )
}

export default AdminMain
