import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {cardListReducer} from "./reducers/cardReducer"

const reducer= combineReducers({
    cardList:cardListReducer

})

const initialState={
    
}

const middleware= [thunk]

const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store