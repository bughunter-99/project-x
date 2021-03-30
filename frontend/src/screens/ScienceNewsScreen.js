import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getScienceNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const ScienceNewsScreen = () => {
  const scienceNews = useSelector((state) => state.scienceNews);
  const { loading, error, scienceNewsList } = scienceNews;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScienceNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest Science News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {scienceNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default ScienceNewsScreen;
