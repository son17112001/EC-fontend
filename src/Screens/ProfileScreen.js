import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Table, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserProfile, updateUserProfile,getPayment } from '../actions/userActions'
import ProfileForm from '../components/ProfileForm'
import axios from 'axios'

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [amountNumber, setAmountNumber] = useState(5)
    // async function getPayment() {
    //     await axios({
    //         method: 'post',
    //         url: 'http://localhost:8081/v1/user/charge',
    //         data: {
    //             amount: amountNumber
    //         },
    //         credentials: 'include',
    //         //withCredentials: true
    //     }).then(function (response) {
    //         window.open(response.data.url, '_blank')
    //     })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }

    const submitHandler = () => {
         //dispatch register
         dispatch(getPayment(amountNumber))
    }
    return (

        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: 'mediumspringgreen' }} id="contained-modal-title-vcenter">
                    Số dư hiện tại: {props.data} VNĐ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Nạp tiền vào tài khoản</h4>
                <Form.Group as={Col} controlId="fullname">
                    <Form.Label style={{ color: 'gold' }}  >Nhập số dư muốn nạp (mệnh giá: Dollar)</Form.Label>
                    <Form.Control required type="number" value={amountNumber} onChange={e => setAmountNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="birthdate">
                    <Form.Label style={{ color: 'gold' }}  >Quy đổi (mệnh giá: VNĐ)</Form.Label>
                    <Form.Control required type="number" disabled={true}
                    />
                </Form.Group>
                <Button style={{ backgroundColor: 'palevioletred', width: '100%' }} onClick={submitHandler}>Nạp tiền</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const ProfileScreen = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userProfile = useSelector(state => state.userProfile)
    const { loading, user } = userProfile

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success, error, receive } = userUpdateProfile

    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [isMale, setIsMale] = useState(false)
    const [number, setNumber] = useState('')
    const [issueDate, setIssueDate] = useState('')
    const [issuePlace, setIssuePlace] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [title, setTitle] = useState('')
    const [workAddress, setWorkAddress] = useState('')
    const [salary, setSalary] = useState()
    const [checkUpdate, setcheckUpdate] = useState(true)
    const [accNumber, setAccNumber] = useState('')
    const [balance, setBalance] = useState(true)

    //modal button (paypal)
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate()
    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        else {
            if (!user.name) {
                dispatch(getUserProfile())
            }
            else {
                setName(user.name)
                setBirth(user.birth.slice(0, 10))
                setNumber(user.personalIdNumber.number)
                setIsMale(user.isMale)
                setIssueDate(user.personalIdNumber.issueDate.slice(0, 10))
                setIssuePlace(user.personalIdNumber.issuePlace)
                setPhoneNumber(user.phoneNumber)
                setHomeAddress(user.homeAddress)
                setEmail(user.email)
                setTitle(user.job.title)
                setWorkAddress(user.job.workAddress)
                setSalary(user.job.salary)
                setAccNumber(user.accNumber)
                setBalance(user.balance)
            }
        }
    }, [dispatch, navigate, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault() //dispatch register
    }

    const toggleUpdate = () => {
        setcheckUpdate(x => !x)
    }

    const setGender = () => {
        setIsMale(x => !x)
    }
    return (<ProfileForm>
        <Form style={{ color: 'deepskyblue' }} onSubmit={submitHandler}>
            <Col>
                <h1 style={{ color: 'lightyellow' }}>Thông tin cá nhân</h1>
                <Row className="mb-3" >
                    <Form.Group as={Col} controlId="accnumber">
                        <Form.Label >Số tài khoản</Form.Label>
                        <Form.Control required type="text" value={accNumber} disabled={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="balance">
                        <Form.Label >Số dư tài khoản:</Form.Label>
                        <Button style={{ backgroundColor: 'palevioletred', width: '100%' }}
                            variant="primary" onClick={() => setModalShow(true)}>{balance} VNĐ</Button>
                    </Form.Group>
                    <MyVerticallyCenteredModal data={balance} show={modalShow} onHide={() => setModalShow(false)} />
                </Row>

                <Row className="mb-3" >
                    <Form.Group as={Col} controlId="fullname">
                        <Form.Label >Họ và tên</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Full Name"
                            value={name} onChange={e => setName(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="birthdate">
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control required type="date"
                            value={birth} onChange={e => setBirth(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} id="gender">
                        <Form.Label >Giới tính</Form.Label>
                        <Form.Check style={{ color: 'springgreen' }} type="checkbox" label="Bạn là nam ?"
                            checked={isMale} onChange={setGender} disabled={checkUpdate} />
                    </Form.Group>
                </Row>

                <Row className="mb-3" >
                    <Form.Label style={{ fontSize: 20 }}>Số CMND - Ngày cấp - Nơi cấp</Form.Label>
                    <Form.Group as={Col} controlId="idnumber">
                        <Form.Control required type="text" placeholder="ID Number"
                            value={number} onChange={e => setNumber(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="issuedate">
                        <Form.Control required type="date"
                            value={issueDate} onChange={e => setIssueDate(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} id="issueplace">
                        <Form.Control required type="text" placeholder="Issue Place"
                            value={issuePlace} onChange={e => setIssuePlace(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>
                </Row>

                <Row className="mb-3" >
                    <Form.Label style={{ fontSize: 20 }}>Thông tin liên lạc</Form.Label>
                    <Form.Group as={Col} controlId="phonenumber">
                        <Form.Control required type="text" placeholder="Phone Number"
                            value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                        <Form.Control required type="email" placeholder="Email Address"
                            value={email} onChange={e => setEmail(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group style={{ marginTop: 10 }} id="homeaddress">
                        <Form.Control required type="text" placeholder="Home Address"
                            value={homeAddress} onChange={e => setHomeAddress(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>
                </Row>

                <Row className="mb-3" >
                    <Form.Label style={{ fontSize: 20 }}>Thông tin nghề nghiệp</Form.Label>
                    <Form.Group as={Col} controlId="jobtitle">
                        <Form.Control required type="text" placeholder="Job Title"
                            value={title} onChange={e => setTitle(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="salary">
                        <Form.Control required type="number" placeholder="May I know your Salary ?"
                            value={salary} onChange={e => setSalary(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>

                    <Form.Group style={{ marginTop: 10 }} id="workaddress">
                        <Form.Control required type="text" placeholder="Work Place Address"
                            value={workAddress} onChange={e => setWorkAddress(e.target.value)} disabled={checkUpdate} />
                    </Form.Group>
                </Row>
                {/* <Row className="mb-3" >
                    <Form.Group as={Col} controlId="register">
                        <Button style={{ backgroundColor: 'palevioletred', width: '100%' }} variant="primary" type="submit">Submit</Button>
                    </Form.Group>

                    <Form.Group as={Col} controlId="updatecontrol">
                        <Form.Check type="checkbox" onChange={toggleUpdate} label="Check to Update" />
                    </Form.Group>
                </Row> */}
                {receive && <Message variant='success'>{receive.message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
            </Col>
        </Form>

        <Form style={{ color: 'deepskyblue' }} onSubmit={submitHandler}>
            <Col className="mb-3 mx-lg-5" >
                <h1 style={{ color: 'lightyellow' }}>Thông tin giao dịch</h1>
                <select value="Radish" className="mb-2">
                    <option value="card1">card 1</option>
                    <option value="card2">card 2</option>
                    <option value="card3">card 3</option>
                </select>
                <Table striped bordered hover variant="info">
                    <thead style={{ color: 'red' }}>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Transaction Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Form>


    </ProfileForm >
    )
}

export default ProfileScreen
