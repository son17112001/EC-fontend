import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const LoginScreen = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const redirect = location.search ? location.search.split('=')[1]: '/'

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault() //dispatch login
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1 style={{ color: 'lightyellow', textAlign: 'center', marginBottom: 30 }}>LOGIN</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='accNumber'>
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control type='accNumber' placeholder='Enter Account Number'
                    value={email} onChange={e => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password'
                    value={password} onChange={e => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
              
                <Row className="py-4">
                <Link to="/login/forgot">
                <p style={{color:"red",fontSize:"12px"}}>Forgot password ?</p>
                </Link>
                    <Col>
                        <Button type='submit' >Sign In</Button>
                    </Col>
                    <Col>
                        <Link to={'/register'}>New customer sign up here ?&#160;</Link>
                    </Col>
                </Row>

            </Form>
        </FormContainer>
    )
}

export default LoginScreen;
