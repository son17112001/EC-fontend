import React, { Component } from 'react'
import {ADMIN_CONSTANTS} from "../constants/adminConstant"
import feEnv from "../config/envfile"
import axios from 'axios'
export const getAllUserInfo = (page) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_GET_REQUEST
        })

        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }
        const { data } = await axios.get(`${feEnv.HOST}/v2/users/all-users?page=${page}`, config)
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_GET_FAIL,
            payload: error.response.data
        })
    }
}


export const getDetailUserInfo = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_DETAIL_REQUEST
        })

        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`${feEnv.HOST}/v2/users/user/details?_id=${id}`, config)

        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_DETAIL_FAIL,
            payload: error.response.data
        })
    }
}



export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_PUT_REQUEST
        })
        console.log(user);
        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.put(`${feEnv.HOST}/v2/users/user/details`,user,config)

        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_PUT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_PUT_FAIL,
            payload: error.response.data
        })
    }
}


export const getUserTransactionLog = (id,page) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_TRANS_REQUEST
        })

        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }

        const { data } = await axios.get(`${feEnv.HOST}/v2/users/user/transaction-logs?_id=${id}&page=${page}`, config)

        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_TRANS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_TRANS_FAIL,
            payload: error.response.data
        })
    }
}

export const getSearchlUserInfo = (property,keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_GET_REQUEST
        })


        const { adminLogin: { adminInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${adminInfo.token}`
            }
        }
        console.log(property,keyword)
        const { data } = await axios.get(`${feEnv.HOST}/v2/users/user-search?property=${property}&keyword=${keyword}`, config)

        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADMIN_CONSTANTS.ADMIN_GET_FAIL,
            payload: error.response.data
        })
    }
}



