import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getGeneralNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const GeneralNewsScreen = () => {
  const generalNews = useSelector((state) => state.generalNews);
  const { loading, error, generalNewsList } = generalNews;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneralNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {generalNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default GeneralNewsScreen;
