import React, { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav";
import SlideBar from "../components/SlideBar";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Checkbox, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {  createCard } from "../actions/adminControlAction";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AdminCardCreate() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [type, setType] = useState("intCredits");
  
  const [card, setCard] = useState({
    cardName: null,
    image: null,
    isIssuing: true,
    cardRank: "Gold",
    publisher:null,
    description: null,
    creditLine: null,
    condition: null,
    statmentDay: null,
    payWithin: null,
    interestRate: null,
    issueFee: null,
    yearlyFee: null,
    exCurrency: null,
    maxPay: null,
  });

  const { notiCard } = useSelector((state) => state.notiCardCreate);
  const adminLogin = useSelector((state) => state.adminLogin);

  const { adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      if (Object.keys(adminInfo).length === 0) {
      
        navigate("/admin");
      }
    }
    // eslint-disable-next-line
  }, [adminInfo]);
  useEffect(() => {
    if (notiCard) {
      setOpen(true);
    }
  }, [notiCard]);

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };
  function sendHandler() {
    
    if (type !== "" && card) {
      dispatch(createCard(type, card));
    }
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
          <Container style={{ marginTop: "50px" }}>
            <h2
              style={{
                textAlign: "center",
                color: "black",
                marginBottom: "50px",
              }}
            >
              Th??ng tin th???
            </h2>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Lo???i th???
              </InputLabel>
              <Select
              defaultValue={"intCredits"}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <MenuItem value="intCredits">T??n d???ng qu???c t???</MenuItem>
                <MenuItem value="intDebits">Ghi n??? qu???c t???</MenuItem>
                <MenuItem value="domDebits">Ghi n??? n???i ?????a</MenuItem>
              </Select>
            </FormControl>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Th??ng b??o!!!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ???? t???o th??? th??nh c??ng.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  ?????ng ??
                </Button>
              </DialogActions>
            </Dialog>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              style={{ border: "1px solid grey", padding: "20px 0 20px 20px" }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="T??n th???"
                  variant="standard"
                  onChange={(e) => {
                    setCard({
                      ...card,
                      cardName: e.target.value,
                    });
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Link h??nh th???"
                  color="success"
                  variant="standard"
                  onChange={(e) => {
                    setCard({
                      ...card,
                      image: e.target.value,
                    });
                  }}
                />

                <TextField
                  id="standard-read-only-input"
                  label="M?? t???"
                  variant="standard"
                  onChange={(e) => {
                    setCard({
                      ...card,
                      description: e.target.value,
                    });
                  }}
                />

                <TextField
                  id="standard-read-only-input"
                  label="Nh?? ph??t h??nh"
                  variant="standard"
                  onChange={(e) => {
                    setCard({
                      ...card,
                      publisher: e.target.value,
                    });
                  }}
                />

                {type === "intCredits" && (
                  <>
                    <TextField
                      id="standard-read-only-input"
                      label="H???n m???c t??n d???ng"
                      onChange={(e) => {
                        setCard({
                          ...card,
                          creditLine: e.target.value,
                        });
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="??i???u ki???n"
                      InputProps={{}}
                      onChange={(e) => {
                        setCard({
                          ...card,
                          condition: e.target.value,
                        });
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Ng??y sao k??"
                      onChange={(e) => {
                        setCard({
                          ...card,
                          statmentDay: e.target.value,
                        });
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Ng??y thanh to??n sau sao k??"
                      onChange={(e) => {
                        setCard({
                          ...card,
                          payWithin: e.target.value,
                        });
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="L??i su???t"
                      onChange={(e) => {
                        setCard({
                          ...card,
                          interestRate: e.target.value,
                        });
                      }}
                      variant="standard"
                    />
                  </>
                )}

                <TextField
                  id="standard-read-only-input"
                  label="Ph?? ph??t h??nh"
                  onChange={(e) => {
                    setCard({
                      ...card,
                      issueFee: e.target.value,
                    });
                  }}
                  variant="standard"
                />
                <TextField
                  id="standard-read-only-input"
                  label="Ph?? h???ng n??m "
                  onChange={(e) => {
                    setCard({
                      ...card,
                      yearlyFee: e.target.value,
                    });
                  }}
                  variant="standard"
                />
                {type!=="domDebits"&& ( <TextField
                  id="standard-read-only-input"
                  label="Ph?? ?????i ngo???i t???"
                  onChange={(e) => {
                    setCard({
                      ...card,
                      exCurrency: e.target.value,
                    });
                  }}
                  variant="standard"
                />)}
               
                {type === "intDebits" && (
                  <TextField
                    id="standard-read-only-input"
                    label="S??? ti???n d??ng t???i ??a trong ng??y"
                    onChange={(e) => {
                      setCard({
                        ...card,
                        maxPay: e.target.value,
                      });
                    }}
                    variant="standard"
                  />
                )}

                <span>
                  <FormControl style={{ minWidth: "120px", marginLeft: "5px" }}>
                    <InputLabel id="demo-simple-select-label">
                      H???ng th???
                    </InputLabel>
                    <Select
                      defaultValue="Gold"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={(e) => {
                        setCard({
                          ...card,
                          cardRank: e.target.value,
                        });
                      }}
                    >
                      <MenuItem value="Gold">V??ng</MenuItem>
                      <MenuItem value="Standard">Th?????ng</MenuItem>
                    </Select>
                  </FormControl>
                </span>
                <div style={{ color: "black" }}>
                  <Checkbox
                    {...label}
                    checked={card.isIssuing}
                    onChange={(e) => {
                      setCard({
                        ...card,
                        isIssuing: e.target.checked,
                      });
                    }}
                  />
                  Tr???ng th??i
                </div>
              </div>

              <Button
                variant="contained"
                style={{ margin: "15px 0 0 5px" }}
                onClick={sendHandler}
              >
                G???i
              </Button>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AdminCardCreate;
