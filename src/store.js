import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
<<<<<<< HEAD
import {cardListReducer} from "./reducers/cardReducer"

const reducer= combineReducers({
    cardList:cardListReducer
=======
import {cardListReducer} from "./reducers/cardReducers"
import { userLoginReducer,userRegisterReducer } from "./reducers/userReducers"
import { userLoginReducer,userRegisterReducer,userProfileReducer ,userUpdateProfileReducer, userGetPaymentReducer} from "./reducers/userReducers"


const reducer= combineReducers({
    cardList : cardListReducer,
    userLogin :userLoginReducer,
    userRegister: userRegisterReducer,
<<<<<<< HEAD
>>>>>>> Login/Regis
=======
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userGetPayment: userGetPaymentReducer
>>>>>>> Login/Regis

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState={
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware= [thunk]
const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store