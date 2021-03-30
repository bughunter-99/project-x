import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getSportsNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const SportsNewsScreen = () => {
  const sportsNews = useSelector((state) => state.sportsNews);
  const { loading, error, sportsNewsList } = sportsNews;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSportsNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest Sports News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {sportsNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default SportsNewsScreen;
