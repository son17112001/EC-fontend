import React,{useState,useEffect} from "react";
import AdminNav from "../components/AdminNav";
import SlideBar from "../components/SlideBar";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import {Checkbox,Button} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import {useDispatch,useSelector} from "react-redux"
import {getDetailUserInfo} from "../actions/adminControlAction"
import {useLocation,useNavigate} from "react-router-dom"
import Loader from '../components/Loader'
import AdminUserTrans from "./AdminUserTrans";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AdminUserDetail() {
    const dispatch= useDispatch();
    const location= useLocation()
    const navigate=useNavigate()
    const id= location.search.slice(5);
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
    useEffect(()=>{
      dispatch(getDetailUserInfo(id))
    },[id,dispatch])
    const {loading, userDetail,error} = useSelector(state=>state.adminControlUserDetail)
    const[detail,setDetail]= useState()
    useEffect(()=>{
      if(userDetail){
        setDetail(userDetail)
      }
    },[userDetail])
    const clickHandler=()=>{
      navigate(`/admin/control/user/transaction?_id=${id}`)
    }
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
            <Container style={{marginTop:"50px"}}>
            <h2 style={{ textAlign: "center" ,color:"black",marginBottom:"50px"}}>Thông tin cá nhân</h2>
            {detail ? (<> <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        style={{border: '1px solid grey',padding:"20px 0 20px 20px" }}
                        noValidate
                        autoComplete="off"

                      >
                        <div>
                        <TextField
                            id="standard-read-only-input"
                            label="ID"
                            defaultValue={detail._id}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Tên khách hàng"
                            defaultValue={detail.name}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Ngày sinh"
                            defaultValue={detail.birth.slice(0,10)}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                           <TextField
                            id="standard-read-only-input"
                            label="Số điện thoại"
                            defaultValue={detail.phoneNumber}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                            <TextField
                            id="standard-read-only-input"
                            label="Email"
                            defaultValue={detail.email}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                            <TextField
                            id="standard-read-only-input"
                            label="Địa chỉ"
                            defaultValue={detail.homeAddress}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                            <TextField
                            id="standard-read-only-input"
                            label="Số tài khoản"
                            defaultValue={detail.accNumber}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                          <span style={{color:"black"}}>
                            <Checkbox {...label} defaultChecked />Trạng thái</span>
                        </div>
                        
                        <TextField
                            id="standard-read-only-input"
                            label="Số dư trong tài khoản"
                            defaultValue={detail.balance}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                          />
                                                  <Button variant="contained" style={{margin:"15px 0 0 5px"}} onClick={clickHandler}>
                          Lịch sử giao dịch
                        </Button>
                      </Box>

                                    <Box
                                    component="form"
                                    sx={{
                                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    style={{border: '1px solid grey' ,marginTop:"50px",padding:"20px 0 20px 20px"}}
                                    noValidate
                                    autoComplete="off"

                                    >
                                    <div>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Số CMND"
                                        defaultValue={detail.personalIdNumber.number}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        variant="standard"
                                      />
                                      <TextField
                                        id="standard-read-only-input"
                                        label="Ngày phát hành"
                                        defaultValue={detail.personalIdNumber.issueDate.slice(0,10)}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        variant="standard"
                                      />
                                      <TextField
                                        id="standard-read-only-input"
                                        label="Nơi cấp"
                                        defaultValue={detail.personalIdNumber.issuePlace}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        variant="standard"
                                      />
                                      <TextField
                                        id="standard-read-only-input"
                                        label="Nghề nghiệp"
                                        defaultValue={detail.job.title}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        variant="standard"
                                      />
                                        <TextField
                                        id="standard-read-only-input"
                                        label="Nơi làm việc"
                                        defaultValue={detail.job.workAddress}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        variant="standard"
                                      />
                                        <TextField
                                        id="standard-read-only-input"
                                        label="Mức lương"
                                        defaultValue={detail.job.salary}
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        variant="standard"
                                      />
                                      
                                          </div>
                                    </Box></> 
                      ) : <Loader />}
                
            </Container>
          </div>
        </div>
      </div>
    )
}

export default AdminUserDetail
