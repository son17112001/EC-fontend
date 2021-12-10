import { ADMIN_CONSTANTS } from "../constants/adminConstant"

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_CONSTANTS.USER_LOGIN_REQUEST: return { loading: true }
        case ADMIN_CONSTANTS.USER_LOGIN_SUCCESS: return { loading: false, adminInfo: action.payload }
        case ADMIN_CONSTANTS.USER_LOGIN_FAIL: return { loading: false, error: action.payload }
        default: return state
    }
}
