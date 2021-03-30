import axios from 'axios';
import {
  VIDEO_DETAILS_FAILED,
  VIDEO_DETAILS_REQUEST,
  VIDEO_DETAILS_SUCCESS,
  VIDEO_LIST_FAILED,
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
} from '../constants/videoConstants';

export const getVideoList = () => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_LIST_REQUEST });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await axios.get('/api/videos', config);
    dispatch({ type: VIDEO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VIDEO_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getVideoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_DETAILS_REQUEST });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/videos/${id}`, config);
    dispatch({ type: VIDEO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VIDEO_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
