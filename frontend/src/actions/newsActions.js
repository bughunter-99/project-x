import axios from 'axios';
import {
  NEWS_DETAILS_FAILED,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_BUSINESS_FAILED,
  NEWS_BUSINESS_REQUEST,
  NEWS_BUSINESS_SUCCESS,
  NEWS_ENTERTAINMENT_FAILED,
  NEWS_ENTERTAINMENT_REQUEST,
  NEWS_ENTERTAINMENT_SUCCESS,
  NEWS_HEALTH_FAILED,
  NEWS_HEALTH_REQUEST,
  NEWS_HEALTH_SUCCESS,
  NEWS_SCIENCE_FAILED,
  NEWS_SCIENCE_REQUEST,
  NEWS_SCIENCE_SUCCESS,
  NEWS_TECH_FAILED,
  NEWS_TECH_REQUEST,
  NEWS_TECH_SUCCESS,
  NEWS_SPORTS_FAILED,
  NEWS_SPORTS_REQUEST,
  NEWS_SPORTS_SUCCESS,
  NEWS_SEARCH_FAILED,
  NEWS_SEARCH_REQUEST,
  NEWS_SEARCH_SUCCESS,
} from '../constants/newsConstants';

export const getGeneralNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTechNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_TECH_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_TECH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_TECH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBusinessNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_BUSINESS_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_BUSINESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_BUSINESS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getScienceNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SCIENCE_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_SCIENCE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_SCIENCE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getHealthNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_HEALTH_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_HEALTH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_HEALTH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEntertainmentNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_ENTERTAINMENT_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_ENTERTAINMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_ENTERTAINMENT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSportsNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SPORTS_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f9a5ec566c8c4a2ab5a71eaa837816a9`
    );

    dispatch({ type: NEWS_SPORTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_SPORTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSearchNews = (query) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SEARCH_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=cbe258c6b409474587856bc29234983a`
    );
    console.log(data);
    dispatch({ type: NEWS_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_SEARCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
