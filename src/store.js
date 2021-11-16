import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import cardReducer from "./reducers/cardReducer"

const reducer= combineReducers({
    cardList=cardReducer

})

const initialState={
    
}

const middleware= [thunk]

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store