import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getEntertainmentNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const EntertainmentNewsScreen = () => {
  const entertainmentNews = useSelector((state) => state.entertainmentNews);
  const { loading, error, entertainmentNewsList } = entertainmentNews;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntertainmentNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest Entertainment News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {entertainmentNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default EntertainmentNewsScreen;
