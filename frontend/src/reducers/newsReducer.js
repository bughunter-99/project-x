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
  NEWS_SPORTS_REQUEST,
  NEWS_SPORTS_SUCCESS,
  NEWS_SPORTS_FAILED,
  NEWS_SEARCH_FAILED,
  NEWS_SEARCH_REQUEST,
  NEWS_SEARCH_SUCCESS,
  NEWS_GAMING_FAILED,
  NEWS_GAMING_REQUEST,
  NEWS_GAMING_SUCCESS,
} from '../constants/newsConstants';

export const generalNewsReducer = (state = { generalNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return { loading: true, generalNewsList: [] };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, generalNewsList: action.payload.articles };
    case NEWS_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const techNewsReducer = (state = { techNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_TECH_REQUEST:
      return { loading: true, techNewsList: [] };
    case NEWS_TECH_SUCCESS:
      return { loading: false, techNewsList: action.payload.articles };
    case NEWS_TECH_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const businessNewsReducer = (
  state = { businessNewsList: [] },
  action
) => {
  switch (action.type) {
    case NEWS_BUSINESS_REQUEST:
      return { loading: true, businessNewsList: [] };
    case NEWS_BUSINESS_SUCCESS:
      return { loading: false, businessNewsList: action.payload.articles };
    case NEWS_BUSINESS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const scienceNewsReducer = (state = { scienceNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_SCIENCE_REQUEST:
      return { loading: true, scienceNewsList: [] };
    case NEWS_SCIENCE_SUCCESS:
      return { loading: false, scienceNewsList: action.payload.articles };
    case NEWS_SCIENCE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const healthNewsReducer = (state = { healthNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_HEALTH_REQUEST:
      return { loading: true, healthNewsList: [] };
    case NEWS_HEALTH_SUCCESS:
      return { loading: false, healthNewsList: action.payload.articles };
    case NEWS_HEALTH_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const entertainmentNewsReducer = (
  state = { entertainmentNewsList: [] },
  action
) => {
  switch (action.type) {
    case NEWS_ENTERTAINMENT_REQUEST:
      return { loading: true, entertainmentNewsList: [] };
    case NEWS_ENTERTAINMENT_SUCCESS:
      return { loading: false, entertainmentNewsList: action.payload.articles };
    case NEWS_ENTERTAINMENT_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sportsNewsReducer = (state = { sportsNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_SPORTS_REQUEST:
      return { loading: true, sportsNewsList: [] };
    case NEWS_SPORTS_SUCCESS:
      return { loading: false, sportsNewsList: action.payload.articles };
    case NEWS_SPORTS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchNewsReducer = (state = { searchNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_SEARCH_REQUEST:
      return { loading: true, searchNewsList: [] };
    case NEWS_SEARCH_SUCCESS:
      return { loading: false, searchNewsList: action.payload.articles };
    case NEWS_SEARCH_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gameNewsReducer = (state = { gameNewsList: [] }, action) => {
  switch (action.type) {
    case NEWS_GAMING_REQUEST:
      return { loading: true, gameNewsList: [] };
    case NEWS_GAMING_SUCCESS:
      return { loading: false, gameNewsList: action.payload.articles };
    case NEWS_GAMING_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
