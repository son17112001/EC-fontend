import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { allTransaction } from "../actions/managermentAction"
import { logout } from "../actions/userActions";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "bank", headerName: "Từ ngân hàng", width: 120 },
  { field: "remitterName", headerName: "Người chuyển", width: 170 },
  { field: "number", headerName: "Đến tài khoản", width: 100 },
  {
    field: "transactionAmount",
    headerName: "Giá trị chuyển",
    width: 100,
  },
  {
    field: "transactionFee",
    headerName: "Phí chuyển",
    width: 150,
  },
  { field: "description", headerName: "Mô tả", width: 150 },
  {
    field: "createdAt",
    headerName: "Thời gian",
    width: 280,
  },
];
var page = 1;
function TransLogScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState();

  const { listTrans, errorTrans } = useSelector(state => state.listTransaction)

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(allTransaction());
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
    else {
      if (errorTrans) {
        dispatch(logout('logout'))
      }
      else if (listTrans) {
        let filted = listTrans.docs.map(trans => {
          let time = new Date(trans.createdAt)
          let arr = {
            id: trans._id,
            bank: trans.from.bank,
            remitterName: trans.from.remitterName,
            number: trans.to.number,
            transactionAmount: trans.fromCurrency.transactionAmount,
            transactionFee: trans.fromCurrency.transactionFee,
            description: trans.description,
            createdAt: time,
          }
          return arr
        })
        setData(filted)
      }
    }
    // eslint-disable-next-line
  }, [listTrans, userInfo, navigate, dispatch])

  const clickHandler = (params, event) => {
    navigate(`/history/detail?id=${params.id}`);
  };
  function handleChange(event, value) {
    dispatch(allTransaction(value));
    page = value;
  }
  return (
    <>

      <div maxWidth="lg" style={{ marginTop: "-10px", backgroundColor: "white", minHeight: "80vh" }}>
        <div style={{ height: 400, width: "100%" }}>
          <h2 style={{ textAlign: "center", margin: "10px", paddingTop: "30px", color: 'black' }}>Lịch sử giao dịch</h2>
          {data && listTrans ? (

            <>
              <DataGrid
                style={{ marginTop: "50px" }}
                onCellDoubleClick={clickHandler}
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                hideFooterPagination={true}

              />{" "}
              <Stack spacing={2}>
                <Pagination count={listTrans.totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
              </Stack>{" "}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>

    </>
  );
}

export default TransLogScreen;
