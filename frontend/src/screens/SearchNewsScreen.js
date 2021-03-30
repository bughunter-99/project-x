import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import uuid from 'uuid';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import NewsCard from '../components/NewsCard';
import searchSVG from '../assets/undraw_File_searching_re_3evy.svg';
import { getSearchNews } from '../actions/newsActions';
const SearchNewsScreen = () => {
  const dispatch = useDispatch();
  const searchNews = useSelector((state) => state.searchNews);
  const { loading, error, searchNewsList } = searchNews;
  const [query, setQuery] = useState('');
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (query !== '') {
        dispatch(getSearchNews(query));
      } else {
        alert("Query can't be empty");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="mt-5">
        <FormContainer>
          <Form>
            <Form.Group controlId="search">
              <Form.Control
                onKeyDown={onEnterPress}
                placeholder="Press Enter To Search.."
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </FormContainer>
      </div>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {searchNewsList.length === 0 && !loading ? (
        <div className="mt-5">
          <FormContainer>
            <img style={{ width: '100%' }} src={searchSVG} alt="search" />
          </FormContainer>
        </div>
      ) : (
        <h3 className="my-3">Search results for {query}</h3>
      )}
      {searchNewsList.length !== 0 && (
        <Row>
          {' '}
          {searchNewsList.map((n) => (
            <Col key={uuid.v4()} md={6}>
              <NewsCard news={n} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default SearchNewsScreen;
