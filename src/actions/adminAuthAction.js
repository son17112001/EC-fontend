import { ADMIN_CONSTANTS } from "../constants/adminConstant"
import feEnv from "../config/envfile"
import axios from 'axios'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:  ADMIN_CONSTANTS.ADMIN_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        const { data } = await axios.post(`${feEnv.HOST}/v2/admin/login`, { email, password }, config)


        dispatch({
            type:  ADMIN_CONSTANTS.ADMIN_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:  ADMIN_CONSTANTS.ADMIN_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

