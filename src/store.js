import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {cardListReducer} from "./reducers/cardReducers"
import { userLoginReducer,userRegisterReducer,userProfileReducer ,userUpdateProfileReducer, userGetPaymentReducer} from "./reducers/userReducers"


const reducer= combineReducers({
    cardList : cardListReducer,
    userLogin :userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userGetPayment: userGetPaymentReducer

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState={
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware= [thunk]
const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store