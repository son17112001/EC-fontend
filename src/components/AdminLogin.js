import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login} from "../actions/adminAuthAction"
import {useLocation,useNavigate} from "react-router-dom"
const theme = createTheme();
function AdminLogin() {
   
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const dispatch=useDispatch();
    const navigate= useNavigate()
    const adminLogin= useSelector(state =>state.adminLogin)
    const {adminInfo,loading}= adminLogin;
    useEffect(()=>{
      if(adminInfo){
            if(Object.keys(adminInfo).length!==0){
              navigate('/admin/welcome')
            }
            
      }
  },[adminInfo,navigate])
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password))
    }
   
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'rgb(16, 26, 51)' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Địa chỉ email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e=>{setEmail(e.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e=>{setPassword(e.target.value)}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Nhớ mật khẩu"
                onSubmit={submitHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submitHandler}
              >
                Login
              </Button>
            
            </Box>
          </Box>
         
        </Container>
      </ThemeProvider>
    )
}

export default AdminLogin

