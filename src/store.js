import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { cardListReducer, cardDetailReducer } from "./reducers/cardReducers"
import { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdatePassReducer, userGetPaymentReducer, userSubPaymentReducer, userWithDrawReducer,userForgotPassReducer } from "./reducers/userReducers"
import {adminLoginReducer} from "./reducers/AdminAuthReducer"
const reducer = combineReducers({
  cardList: cardListReducer,
  cardDetail: cardDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userForgotPassWord: userForgotPassReducer,
  userProfile: userProfileReducer,
  userUpdatePass: userUpdatePassReducer,
  userGetPayment: userGetPaymentReducer,
  userSubPayment: userSubPaymentReducer,
  userWithDraw: userWithDrawReducer,
  adminLogin: adminLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
