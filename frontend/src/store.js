import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userDeleteReducer,
  userListReducer,
  userUpdateAdminReducer,
  userUpdateReducer,
} from './reducers/userReducer';
import {
  businessNewsReducer,
  entertainmentNewsReducer,
  generalNewsReducer,
  healthNewsReducer,
  scienceNewsReducer,
  techNewsReducer,
  sportsNewsReducer,
  searchNewsReducer,
} from './reducers/newsReducer';
import { cryptoReducer } from './reducers/cryptoReducer';
import { videoDetailsReducer, videoListReducer } from './reducers/videoReducer';
import {
  blogCreateReducer,
  blogDetailsReducer,
  blogListReducer,
} from './reducers/blogReducer';
const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateAdmin: userUpdateAdminReducer,
  generalNews: generalNewsReducer,
  businessNews: businessNewsReducer,
  techNews: techNewsReducer,
  scienceNews: scienceNewsReducer,
  healthNews: healthNewsReducer,
  entertainmentNews: entertainmentNewsReducer,
  sportsNews: sportsNewsReducer,
  searchNews: searchNewsReducer,
  cryptoCurrency: cryptoReducer,
  videoPost: videoListReducer,
  videoDetails: videoDetailsReducer,
  blogPost: blogListReducer,
  blogDetails: blogDetailsReducer,
  createBlog: blogCreateReducer,
});

const userInfoFromStroage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStroage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
