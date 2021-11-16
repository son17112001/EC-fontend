import axios from "axios"
import {CARD_LIST_FAIL,CARD_LIST_SUCCESS,CARD_LIST_REQUEST} from '../constants/cardConstant'



export const listCard=()=> async(dispatch) =>{
    try{
            dispatch({type: CARD_LIST_REQUEST});
            const {data}=await axios.get("api/cards") //just default
            dispatch({
                type:CARD_LIST_SUCCESS,
                payload: data
            })
    }catch(error){
            dispatch({
                type: CARD_LIST_FAIL,
                payload: error.response.data.message
            })
    }
}
