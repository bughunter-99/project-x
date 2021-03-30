import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getHealthNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const HealthNewsScreen = () => {
  const healthNews = useSelector((state) => state.healthNews);
  const { loading, error, healthNewsList } = healthNews;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHealthNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest Health News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {healthNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default HealthNewsScreen;
