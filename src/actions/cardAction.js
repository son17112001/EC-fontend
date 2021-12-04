import {
  CARD_LIST_FAIL,
  CARD_LIST_SUCCESS,
  CARD_LIST_REQUEST,
} from "../constants/cardConstant";
import {CARD_DETAIL_FAIL,CARD_DETAIL_SUCCESS,CARD_DETAIL_REQUEST} from '../constants/cardConstant'

import axios from "axios";

export const listCard = () => async (dispatch) => {
  try {
    dispatch({ type: CARD_LIST_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_HOST}/v1/card-type/cards`);

    dispatch({
      type: CARD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CARD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const detailCard = (cardType,cardUrl) => async (dispatch) => {
  try {
    dispatch({ type: CARD_DETAIL_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_HOST}/v1/card-type/${cardType}/${cardUrl}`);

    console.log(data);
    dispatch({
      type: CARD_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CARD_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
