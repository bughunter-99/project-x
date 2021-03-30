import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import React from 'react';
import Header from './components/Header';
import ProfileScreen from './screens/ProfileScreen';
import NewsTab from './components/NewsTab';
import CryptoScreen from './screens/CryptoScreen';
import VideoListScreen from './screens/VideoListScreen';
import VideoScreen from './screens/VideoScreen';
import BlogListScreen from './screens/BlogListScreen';
import BlogScreen from './screens/BlogScreen';
import CreateBlogScreen from './screens/CreateBlogScreen';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let routes;
  if (userInfo) {
    routes = (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route
          exact
          path={`/${userInfo.name}/profile`}
          component={ProfileScreen}
        />
        <Route exact path="/news" component={NewsTab} />
        <Route exact path="/cryptocurrencies" component={CryptoScreen} />
        <Route exact path="/videos" component={VideoListScreen} />
        <Route exact path="/videos/:id" component={VideoScreen} />
        <Route exact path="/blogs" component={BlogListScreen} />
        <Route exact path="/blogs/:id" component={BlogScreen} />
        <Route
          exact
          path="/admin/blogs/new-post"
          component={CreateBlogScreen}
        />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/news" component={NewsTab} />
        <Route exact path="/cryptocurrencies" component={CryptoScreen} />
        <Route exact path="/videos" component={VideoListScreen} />
        <Route exact path="/videos/:id" component={VideoScreen} />
        <Route exact path="/blogs" component={BlogListScreen} />
        <Route exact path="/blogs/:id" component={BlogScreen} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Switch>{routes}</Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
