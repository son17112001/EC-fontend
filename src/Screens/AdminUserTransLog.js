import React, { useState, useEffect } from "react";
import {  Box, Container, TextField } from "@mui/material";
import { getUserTransactionLog } from "../actions/adminControlAction";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,useLocation} from "react-router-dom"
import AdminNav from "../components/AdminNav";
import SlideBar from "../components/SlideBar";
import Loader from "../components/Loader";
import localTime from "../util/localTime";
function AdminUserTransLog() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const location = useLocation()
  const id= location.search.slice(6);
  const [data, setData] = useState();
  const { userTrans} = useSelector(state=>state.adminControlUserTransaction)
  const adminLogin= useSelector(state =>state.adminLogin)
    const {adminInfo}= adminLogin;
    useEffect(()=>{
      if(adminInfo){
        if(Object.keys(adminInfo).length===0){
          navigate('/admin')
        } 
      }
  },[adminInfo,navigate])
  useEffect(()=>{
    dispatch(getUserTransactionLog(id));
  },[dispatch,id])
  useEffect(()=>{
    if(userTrans){
        setData(userTrans)
    }
  },[userTrans])
 
  return (
    <>

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
            <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <div style={{ height: 650, width: "100%" }}>
          <h2 style={{ textAlign: "center" }}>Chi tiết giao dịch giao dịch</h2>
           <div style={{color:"black",fontSize:"13px"}}>
          
           {data ? (<> <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        style={{border: '1px solid grey',padding:"20px 0 20px 20px" }}
                        noValidate
                        autoComplete="off"

                      >
                         <TextField
                            id="standard-read-only-input"
                            label="Mã giao dịch"
                            defaultValue={data._id}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Loại giao dịch"
                            defaultValue={data.transType.service_name}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Mô tả chi tiết"
                            defaultValue={data.description}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                            <TextField
                            id="standard-read-only-input"
                            label="Thời gian tạo"
                            defaultValue={localTime(data.createdAt)}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                            <TextField
                            id="standard-read-only-input"
                            label="Tỉ lệ đổi ngoại tệ"
                            defaultValue={data.exchangeRate}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                             <TextField
                            id="standard-read-only-input"
                            label="Số tiền"
                            defaultValue={data.fromCurrency.transactionAmount}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                            <TextField
                            id="standard-read-only-input"
                            label="Phí giao dịch"
                            defaultValue={data.fromCurrency.transactionFee}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Đơn vị"
                            defaultValue={data.fromCurrency.currency_code}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                      </Box>
                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        style={{border: '1px solid grey',padding:"20px 0 20px 20px" }}
                        noValidate
                        autoComplete="off"

                      >
                         <TextField
                            id="standard-read-only-input"
                            label="Từ ngân hàng"
                            defaultValue={data.from.bank}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Từ tài khoản"
                            defaultValue={data.from.number}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Người chuyển"
                            defaultValue={data.from.remitterName}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                          
                        
                           
                           
                      </Box>

                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        style={{border: '1px solid grey',padding:"20px 0 20px 20px" }}
                        noValidate
                        autoComplete="off"

                      >
                         <TextField
                            id="standard-read-only-input"
                            label="Đến ngân hàng"
                            defaultValue={data.to.bank}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Đến tài khoản"
                            defaultValue={data.to.number}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Tài khoản nhận"
                            defaultValue={data.to.UID}
                            InputProps={{
                              readOnly: true,
                            }}
                           
                            variant="standard"
                           
                          />
                        
                           
                           
                      </Box>

                                   
                                    </> 
                      ) : <Loader />} 
           </div>
        </div>
        
      </Container>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default AdminUserTransLog;
