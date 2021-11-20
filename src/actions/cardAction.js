import {
  CARD_LIST_FAIL,
  CARD_LIST_SUCCESS,
  CARD_LIST_REQUEST,
} from "../constants/cardConstant";
import axios from "axios";

export const listCard = () => async (dispatch) => {
  try {
    dispatch({ type: CARD_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:8085/v1/card-type/cards");
    console.log(data);
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
