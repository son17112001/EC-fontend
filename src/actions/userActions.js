import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_GET_PAYMENT_FAIL,
    USER_GET_PAYMENT_REQUEST,
    USER_GET_PAYMENT_RESET,
    USER_GET_PAYMENT_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS
} from "../constants/userConstants"
import axios from 'axios'

const URL = `http://localhost:${process.env.REACT_APP_PORT}`

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/v1/user/login`, { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}


export const register = (
    name, birth, isMale,
    personalIdNumber, phoneNumber,
    email, homeAddress, job) => async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST
            })

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post(`${URL}/v1/user/register`,
                {
                    name, birth, isMale,
                    personalIdNumber, phoneNumber,
                    email, homeAddress, job
                }, config)

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: { status: error.response.status, messages: error.response.data }
            })
        }
    }

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`${URL}/v1/user/profile`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/users/profile`, user, config)

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}


export const getPayment = (amountNumber) => async (dispatch, getState) => {    
    try {
        dispatch({
            type: USER_GET_PAYMENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const totalAmount = {
            amount: amountNumber
        }

        const { data } = await axios.post(`${URL}/v1/user/charge`, totalAmount, config)
        
        window.open(data.url, '_blank')
        dispatch({
            type: USER_GET_PAYMENT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: USER_GET_PAYMENT_FAIL,
            payload: error.response
        })
    }
}
