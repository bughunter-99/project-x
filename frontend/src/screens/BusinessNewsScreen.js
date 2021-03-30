import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import { getBusinessNews } from '../actions/newsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import NewsCard from '../components/NewsCard';

const BusinessNewsScreen = () => {
  const businessNews = useSelector((state) => state.businessNews);
  const { loading, error, businessNewsList } = businessNews;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessNews());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className="my-3">Latest Business News</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {' '}
          {businessNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default BusinessNewsScreen;
