import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Table, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserProfile, updateUserProfile, getPayment } from '../actions/userActions'
import ProfileForm from '../components/ProfileForm'
import { Paypal } from 'react-bootstrap-icons'

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const [amountNumber, setAmountNumber] = useState(5)
    const [isCharge, setIsCharge] = useState(true)
    const userGetPayment = useSelector(state => state.userGetPayment)
    const { loading } = userGetPayment

    const submitHandler = () => {
        if (isCharge) {
            dispatch(getPayment(amountNumber))
        }
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
                <Form.Group as={Col} controlId="fullname">
                    <Form.Label style={{ color: 'gold' }}  >Nhập số dư xử lý giao dịch (mệnh giá: Dollar)</Form.Label>
                    <Form.Control required type="number" value={amountNumber} onChange={e => setAmountNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="birthdate">
                    <Form.Label style={{ color: 'gold' }}  >Quy đổi (mệnh giá: VNĐ)</Form.Label>
                    <Form.Control required type="number" disabled={true}
                    />
                </Form.Group>

                <Form.Group as={Col} id="chargeorwithdraw">
                    <Form.Label >Chọn hình thức xử lý giao dịch (PAYPAL)</Form.Label>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Form.Check style={{ color: 'khaki' }} type="radio" label="Nạp tiền" checked={isCharge === true}
                            onChange={() => setIsCharge(true)} />
                        <Form.Check style={{ color: 'khaki' }} type="radio" label="Rút tiền" checked={isCharge === false}
                            onChange={() => setIsCharge(false)} />
                    </div>
                </Form.Group>

                <Button style={{ backgroundColor: 'dodgerblue', width: '100%' }}
                    onClick={submitHandler}><Paypal size={25} /> Xử lý</Button>
                {loading && <Loader />}
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
    const { successRes, errorRes } = userUpdateProfile



    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [isMale, setIsMale] = useState(true)
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
    const [balance, setBalance] = useState(0)

    const [curPassword, setCurPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [newPassword, setNewPassWord] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [message, setMessage] = useState('')

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
        e.preventDefault() //update profile
        if (curPassword !== rePassword) {
            setMessage('Password không trùng khớp !')
        }
        else {
            dispatch(updateUserProfile({
                id: user._id, curPassword, newPassword, confirmNewPassword
            }))
        }
    }

    const toggleUpdate = () => {
        setcheckUpdate(x => !x)
        setMessage(null)
    }
    //tran4774@gmail.com   qwertyU@1
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
                            value={name} onChange={e => setName(e.target.value)} disabled={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="birthdate">
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control required type="date"
                            value={birth} onChange={e => setBirth(e.target.value)} disabled={true} />
                    </Form.Group>

                    <Form.Group as={Col} id="gender">
                        <Form.Label >Giới tính</Form.Label>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Form.Check style={{ color: 'springgreen' }} type="radio" label="Nam" checked={isMale === true}
                                onChange={() => setIsMale(true)} disabled={true} />
                            <Form.Check style={{ color: 'springgreen' }} type="radio" label="Nữ" checked={isMale === false}
                                onChange={() => setIsMale(false)} disabled={true} />
                        </div>
                    </Form.Group>
                </Row>

                <Row className="mb-3" >
                    <Form.Label style={{ fontSize: 20 }}>Số CMND - Ngày cấp - Nơi cấp</Form.Label>
                    <Form.Group as={Col} controlId="idnumber">
                        <Form.Control required type="text" placeholder="ID Number"
                            value={number} onChange={e => setNumber(e.target.value)} disabled={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="issuedate">
                        <Form.Control required type="date"
                            value={issueDate} onChange={e => setIssueDate(e.target.value)} disabled={true} />
                    </Form.Group>

                    <Form.Group as={Col} id="issueplace">
                        <Form.Control required type="text" placeholder="Issue Place"
                            value={issuePlace} onChange={e => setIssuePlace(e.target.value)} disabled={true} />
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

                {!checkUpdate && <Row className="mb-3" >
                    <Form.Label style={{ fontSize: 20 }}>Xác nhận mật khẩu</Form.Label>
                    <Form.Group style={{ marginTop: 10, width: '50%' }} controlId="curpassword">
                        <Form.Control required type="password" placeholder="Nhập mật khẩu hiện tại"
                            value={curPassword} onChange={e => setCurPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group style={{ marginTop: 10, width: '50%' }} controlId="curpassword">
                        <Form.Control required type="password" placeholder="Xác nhận mật khẩu hiện tại"
                            value={rePassword} onChange={e => setRePassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group style={{ marginTop: 20, width: '50%' }} id="newpassword">
                        <Form.Control type="password" placeholder="Nhập mật khẩu mới"
                            value={newPassword} onChange={e => setNewPassWord(e.target.value)} />
                    </Form.Group>

                    <Form.Group  style={{ marginTop: 20, width: '50%' }} id="confirmnewpassword">
                        <Form.Control type="password" placeholder="Xác nhận nhập mật khẩu mới "
                            value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                    </Form.Group>
                </Row>}

                <Row className="mb-3" >
                    <Form.Group as={Col} controlId="register">
                        <Button style={{ backgroundColor: 'palevioletred', width: '100%' }} variant="primary" type="submit">Cập nhật</Button>
                    </Form.Group>

                    <Form.Group as={Col} controlId="updatecontrol">
                        <Form.Check type="checkbox" onChange={toggleUpdate} label="Check to Update" />
                    </Form.Group>
                </Row>

                {message && <Message variant='info'>{message}</Message>}
                {successRes && <Message variant='success'>{successRes.message}</Message>}
                {errorRes && <Message variant='danger'>
                {errorRes.messages.errors.map(e => e.msg).join(', ')}</Message>}
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
