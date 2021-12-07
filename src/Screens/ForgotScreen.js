import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { forgotPassword } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import ReCAPTCHA from "react-google-recaptcha";
import feEnv from "../config/envfile"
import {useNavigate} from "react-router-dom"
const ForgotScreen = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const userForgotPassWord = useSelector((state) => state.userForgotPassWord);
  const { loading, resMessage } = userForgotPassWord;
  var { success } = userForgotPassWord;
  const [email, setEmail] = useState("");
  const [vertify, setVertify]= useState(false)
  const [noti,setNoti]= useState("")

  useEffect(() => {
    if(success===true){
      setNoti("Đổi mật khẩu thành công, chuyển hướng đến trang đang nhập!!!")
      setTimeout(()=>{
        navigate("/login")
      },3000)
    }
  }, [success,navigate]);
 
  const submitHandler = (e) => {
    e.preventDefault();//dispatch login
    if(vertify){
      
      dispatch(forgotPassword(email));
      setNoti("");
     
    }
    else{
      setNoti("Check reCaptcha trước khi gửi !!!")
    }
  };
  const handleVerify =(value)=>{
    setVertify(true);
  }
  return (
    <FormContainer>
      <h1
        style={{ color: "lightyellow", textAlign: "center", marginBottom: 30 }}
      >
        Quên mật khẩu
      </h1>
      {noti && <Message variant="warning">{noti}</Message>}
      {success===false && <Message variant="danger">{resMessage}</Message> }
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="accNumber">
          <Form.Label>Nhập email đã đăng kí</Form.Label>
          <Form.Control
            type="accNumber"
            placeholder="Enter Account Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
                                  <ReCAPTCHA
    sitekey={`${feEnv.RECAPTCHA_KEY}`}
    onChange={handleVerify}
  />
        </Form.Group>

        <Row className="py-4">
          <Col>
            <Button type="submit" variant="success" style={{ width: "100%" }}>
              Gửi
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default ForgotScreen;
