import axios from 'axios';
import {
  CRYPTO_DETAILS_FAILED,
  CRYPTO_DETAILS_REQUEST,
  CRYPTO_DETAILS_SUCCESS,
} from '../constants/cryptoConstants';

export const getCryptoCurrency = () => async (dispatch) => {
  try {
    dispatch({ type: CRYPTO_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=250&page=1&sparkline=false`
    );

    dispatch({ type: CRYPTO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CRYPTO_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
