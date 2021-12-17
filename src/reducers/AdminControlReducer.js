import { ADMIN_CONSTANTS } from "../constants/adminConstant"

export const adminControlUser = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_CONSTANTS.ADMIN_GET_REQUEST: return { loading: true }
        case ADMIN_CONSTANTS.ADMIN_GET_SUCCESS: return { loading: false, listUser: action.payload,error:null }
        case ADMIN_CONSTANTS.ADMIN_GET_FAIL: return { loading: false, error: action.payload,listUser:null }
        default: return state
    }
}



export const adminControlUserDetail = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_CONSTANTS.ADMIN_DETAIL_REQUEST: return { loading: true }
        case ADMIN_CONSTANTS.ADMIN_DETAIL_SUCCESS: return { loading: false, userDetail: action.payload,error:null }
        case ADMIN_CONSTANTS.ADMIN_DETAIL_FAIL: return { loading: false, error: action.payload,userDetail:null }
        default: return state
    }
}


export const adminControlUserUpdate = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_CONSTANTS.ADMIN_PUT_REQUEST: return { loading: true }
        case ADMIN_CONSTANTS.ADMIN_PUT_SUCCESS: return { loading: false, noti: action.payload,error:null }
        case ADMIN_CONSTANTS.ADMIN_PUT_FAIL: return { loading: false, error: action.payload,noti:null }
        default: return state
    }
}


export const adminControlUserTransaction = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_CONSTANTS.ADMIN_TRANS_REQUEST: return { loading: true }
        case ADMIN_CONSTANTS.ADMIN_TRANS_SUCCESS: return { loading: false, userTrans: action.payload,error:null }
        case ADMIN_CONSTANTS.ADMIN_TRANS_FAIL: return { loading: false, error: action.payload,userTrans:null }
        default: return state
    }
}
