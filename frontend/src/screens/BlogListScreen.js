import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogList } from '../actions/blogActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import BlogCard from '../components/BlogCard';

const BlogListScreen = () => {
  const dispatch = useDispatch();
  const blogPost = useSelector((state) => state.blogPost);
  const { loading, error, blogList } = blogPost;

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        blogList.map((blog) => (
          <Row key={blog._id}>
            <Col>
              <BlogCard blog={blog} />
            </Col>
          </Row>
        ))
      )}
    </React.Fragment>
  );
};

export default BlogListScreen;
