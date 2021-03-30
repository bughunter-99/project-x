import {
  VIDEO_DETAILS_FAILED,
  VIDEO_DETAILS_REQUEST,
  VIDEO_DETAILS_SUCCESS,
  VIDEO_LIST_FAILED,
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
} from '../constants/videoConstants';

export const videoListReducer = (state = { videoList: [] }, action) => {
  switch (action.type) {
    case VIDEO_LIST_REQUEST:
      return { loading: true, videoList: [] };
    case VIDEO_LIST_SUCCESS:
      return { loading: false, videoList: action.payload };
    case VIDEO_LIST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const videoDetailsReducer = (state = { video: {} }, action) => {
  switch (action.type) {
    case VIDEO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case VIDEO_DETAILS_SUCCESS:
      return { loading: false, video: action.payload };
    case VIDEO_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
