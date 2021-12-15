import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { cardListReducer, cardDetailReducer } from "./reducers/cardReducers"
import { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdatePassReducer, userGetPaymentReducer, userSubPaymentReducer, user_DT_Reducer } from "./reducers/userReducers"

const reducer = combineReducers({
  cardList: cardListReducer,
  cardDetail: cardDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userUpdatePass: userUpdatePassReducer,
  userGetPayment: userGetPaymentReducer,
  userSubPayment: userSubPaymentReducer,
  user_DT_services: user_DT_Reducer,

});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
