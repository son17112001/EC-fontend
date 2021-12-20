import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => {

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, errorRes, successRes } = userRegister

    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [isMale, setIsMale] = useState(true)
    const [number, setNumber] = useState('')
    const [issueDate, setIssueDate] = useState('')
    const [issuePlace, setIssuePlace] = useState('')
    const personalIdNumber = { number, issueDate, issuePlace }
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [title, setTitle] = useState('')
    const [workAddress, setWorkAddress] = useState('')
    const [salary, setSalary] = useState()
    const job = { title, workAddress, salary }

    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [dispatch, navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault() //dispatch register
        dispatch(register(name, birth, isMale, personalIdNumber, phoneNumber, email, homeAddress, job))
    }

    return (<FormContainer>
        <h1 style={{ color: 'lightyellow', textAlign: 'center', marginBottom: 30 }}>Đăng ký</h1>
        <Form style={{ color: 'deepskyblue' }} onSubmit={submitHandler}>
            <Row className="mb-3" >
                <Form.Group as={Col} controlId="fullname">
                    <Form.Label >Họ và tên</Form.Label>
                    <Form.Control required type="text" placeholder="họ và tên"
                        value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="birthdate">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control required type="date"
                        value={birth} onChange={e => setBirth(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} id="gender" >
                    <Form.Label >Giới tính</Form.Label>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Form.Check style={{ color: 'springgreen' }} type="radio" label="Nam" checked={isMale === true}
                            onChange={() => setIsMale(true)} />
                        <Form.Check style={{ color: 'springgreen' }} type="radio" label="Nữ" checked={isMale === false}
                            onChange={() => setIsMale(false)} />
                    </div>
                </Form.Group>
            </Row>

            <Row className="mb-3" >
                <Form.Label style={{ fontSize: 20 }}>CMND/CCCD - Ngày cấp - Nơi cấp</Form.Label>
                <Form.Group as={Col} controlId="idnumber">
                    <Form.Control required type="text" placeholder="CMND/CCCD"
                        value={number} onChange={e => setNumber(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="issuedate">
                    <Form.Control required type="date"
                        value={issueDate} onChange={e => setIssueDate(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} id="issueplace">
                    <Form.Control required type="text" placeholder="Nơi cấp"
                        value={issuePlace} onChange={e => setIssuePlace(e.target.value)} />
                </Form.Group>
            </Row>

            <Row className="mb-3" >
                <Form.Label style={{ fontSize: 20 }}>Thông tin liên lạc</Form.Label>
                <Form.Group as={Col} controlId="phonenumber">
                    <Form.Control required type="text" placeholder="Số điện thoại"
                        value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="email">
                    <Form.Control required type="email" placeholder="Địa chỉ Email"
                        value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group style={{ marginTop: 10 }} id="homeaddress">
                    <Form.Control required type="text" placeholder="Địa chỉ nơi ở"
                        value={homeAddress} onChange={e => setHomeAddress(e.target.value)} />
                </Form.Group>
            </Row>

            <Row className="mb-3" >
                <Form.Label style={{ fontSize: 20 }}>Thông tin nghề nghiệp</Form.Label>
                <Form.Group as={Col} controlId="jobtitle">
                    <Form.Control required type="text" placeholder="Nghề nghiệp"
                        value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="salary">
                    <Form.Control required type="number" placeholder="Mức thu nhập"
                        value={salary} onChange={e => setSalary(e.target.value)} />
                </Form.Group>

                <Form.Group style={{ marginTop: 10 }} id="workaddress">
                    <Form.Control required type="text" placeholder="Địa chỉ nơi làm"
                        value={workAddress} onChange={e => setWorkAddress(e.target.value)} />
                </Form.Group>
            </Row>

            <Row className="mb-3" >
                <Form.Group as={Col} controlId="register">
                    <Button style={{ backgroundColor: 'palevioletred', width: '100%' }} variant="primary" type="submit">Đăng ký</Button>
                </Form.Group>

                <Form.Group as={Col} controlId="login">
                    Đã có tài khoản ?&#160;<Link to={'/login'}> Đăng nhập</Link>
                </Form.Group>
            </Row>
            {successRes && <Message variant='success'>{successRes.message}</Message>}
            {errorRes && <Message variant='danger'>
                {errorRes.messages.message}, {errorRes.messages.errors.map(e => e.msg).join(', ')}</Message>}
            {loading && <Loader />}
        </Form>
    </FormContainer>)
}

export default RegisterScreen
