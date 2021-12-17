import React, { useEffect } from "react";
import AdminNav from "../components/AdminNav";
import SlideBar from "../components/SlideBar";
import AdminUserView from "./AdminUserView";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminWelcome() {
  const navigate= useNavigate()
  const { loading, error, listUser } = useSelector(
    (state) => state.adminControl
  );
  const adminLogin= useSelector(state =>state.adminLogin)
  const {adminInfo}= adminLogin;
  useEffect(()=>{
    if(adminInfo){
      if(Object.keys(adminInfo).length===0){
        console.log(adminInfo)
        navigate('/admin')
      } 
    }
},[adminInfo,navigate])
  useEffect(() => {
    if(adminInfo===null){
    
       
        navigate('/admin')
    }
  }, []);
  return (
    <div
      className="content-wrapper"
      style={{ height: "94vh", marginTop: "-88px" }}
    >
      <div
        className="main-content"
        style={{ backgroundColor: "rgb(251, 255, 255)" }}
      >
        <AdminNav />
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <SlideBar />
          <Container>
            <Box
              sx={{
                marginTop: 35,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color:"black"
              }}
            >
              <Typography component="h1" variant="h5">
                Chào mừng đến trang admin
              </Typography>

              <Typography component="h3" variant="h5">
                Ở đây bạn có các chức năng ở bên thanh slide bar
              </Typography>
            </Box>

            <h4></h4>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AdminWelcome;
