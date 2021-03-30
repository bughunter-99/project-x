import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { getBlogDetails } from '../actions/blogActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col } from 'react-bootstrap';
const BlogScreen = ({ match }) => {
  const dispatch = useDispatch();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(getBlogDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Col>
          <Row>
            <img
              style={{ width: '100%', height: '200px' }}
              src={blog.bannerImageUrl}
            />
          </Row>
          <ReactMarkdown source={blog.postContent} />
        </Col>
      )}
    </React.Fragment>
  );
};

export default BlogScreen;
