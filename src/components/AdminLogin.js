import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";

import React from 'react'

function AdminLogin() {
    return (
                       
                        <CDBCard style={{ width: "30rem", margin:"100px 0 0 500px",height:"500px"    }}>
                        <CDBCardBody className="mx-4" style={{color:"black"}}>
                            <div className="text-center mt-4 mb-2">
                            <p className="h4" style={{color:"black"}}> Sign in </p>
                            </div>
                            <CDBInput className="cdb-input" material hint="E-mail" type="email"  style={{color:"black"}} />

                            <CDBInput className="cdb-input"  material hint="Password" type="password" />
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                            <CDBInput type="Checkbox" />
                            
                            {/* <CDBLink to="#">Forgot Password ?</CDBLink> */}
                            </div>
                            <CDBBtn
                            color="dark"
                            className="btn-block my-3 mx-0" >
                                Sign in
                            </CDBBtn>
                            {/* <p className="text-center">Not a member? <CDBLink className="d-inline p-0" to="#">Register</CDBLink></p> */}
                         
                            <div className="row my-3 d-flex justify-content-center">
                            <CDBBtn
                                color="white"
                                style={{boxShadow:"none"}}
                            >
                                {/* <CDBIcon fab icon="facebook-f" /> */}
                            </CDBBtn>
                            <CDBBtn
                                color="white"
                                className="m-0"
                                style={{boxShadow:"none"}}
                            >
                                {/* <CDBIcon fab icon="twitter" /> */}
                            </CDBBtn>
                            <CDBBtn
                                color="white"
                                style={{boxShadow:"none"}}
                            >
                                {/* <CDBIcon fab icon="google-plus-g"/> */}
                            </CDBBtn>
                            </div>
                        </CDBCardBody>
                        </CDBCard>
              
    )
}

export default AdminLogin

