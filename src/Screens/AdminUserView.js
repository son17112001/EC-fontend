import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { getAllUserInfo } from "../actions/adminControlAction";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import Loader from "../components/Loader";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const columns = [
  { field: "id", headerName: "ID", width: 150  },
  { field: "name", headerName: "Tên khách hàng", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "phoneNumber",
    headerName: "Số điện thoại",
    type: "number",
    width: 130,
  },
  {
    field: "isMale",
    headerName: "Giới tính",
    width: 100,
  },
  {
    field: "personalIdNumber",
    headerName: "CMND",
    width: 150,
  },
];
var page=1;
function AdminUserView() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [data, setData] = useState();
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
    dispatch(getAllUserInfo(page));
  }, []);

  useEffect(() => {
    if (listUser) {
      let save = validateData(listUser);
      setData(save);
    }
  }, [listUser]);
  function validateData(list) {
    const userData = list.docs.map((user) => {
      const { _id, name, email, phoneNumber, personalIdNumber, isMale } = user;
      let data = {
        id: _id,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isMale: isMale,
        personalIdNumber: personalIdNumber,
      };
      return data;
    });
    return userData;
  }

  const clickHandler = (params, event) => {
    navigate(`/admin/control/user/details?_id=${params.id}`)

  };
  function handleChange(event, value){

        dispatch(getAllUserInfo(value));
        page=value;
        console.log(page);
  }
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "100px" }}>
        <div style={{ height: 400, width: "100%" }}>
          <h2 style={{ textAlign: "center" }}>Danh sách người dùng</h2>
          {data && listUser ? (<> <DataGrid
            onCellDoubleClick={clickHandler}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterPagination={true}
          />   <Stack spacing={2}>

          <Pagination count={listUser.totalPages} variant="outlined" shape="rounded" page={page}  onChange={handleChange}/>
        </Stack> </>) : <Loader/>}
         
        </div>
      </Container>
    </>
  );
}

export default AdminUserView;
