import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getTechNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const TechNewsScreen = () => {
  const techNews = useSelector((state) => state.techNews);
  const { loading, error, techNewsList } = techNews;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest Technology News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {techNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default TechNewsScreen;
