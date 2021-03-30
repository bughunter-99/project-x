import {
  CRYPTO_DETAILS_FAILED,
  CRYPTO_DETAILS_REQUEST,
  CRYPTO_DETAILS_SUCCESS,
} from '../constants/cryptoConstants';

export const cryptoReducer = (state = { cryptoList: [] }, action) => {
  switch (action.type) {
    case CRYPTO_DETAILS_REQUEST:
      return { loading: true, cryptoList: [] };
    case CRYPTO_DETAILS_SUCCESS:
      return { loading: false, cryptoList: action.payload };
    case CRYPTO_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
