import axios from 'axios';
import {
  BLOG_DETAILS_FAILED,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAILED,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_CREATE_FAILED,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_RESET,
  BLOG_CREATE_SUCCESS,
} from '../constants/blogContants';

export const getBlogList = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await axios.get('/api/post', config);
    dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/post/${id}`, config);
    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewBlog = (
  postTitle,
  postDescription,
  postContent,
  postThumbnail
) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/post/create',
      {
        postTitle,
        postDescription,
        postContent,
        postThumbnail,
      },
      config
    );
    dispatch({ type: BLOG_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_CREATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
