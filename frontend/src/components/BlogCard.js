import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'react-share';

const BlogCard = ({ blog }) => {
  const title = blog.postTitle.split(' ');
  return (
    <React.Fragment>
      <Card className="my-3" border="secondary">
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img variant="top" src={blog.postThumbnail} />
          </Col>
          <Col>
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100%',
              }}
            >
              <Card.Title>
                <h4>
                  {title
                    .map((word) => {
                      return word[0].toUpperCase() + word.substring(1);
                    })
                    .join(' ')}
                </h4>
              </Card.Title>
              <Card.Text>{blog.postDescription}</Card.Text>
              <Card.Text className="text-muted">
                posted on: {new Date(blog.createdAt).toDateString()}
              </Card.Text>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Link to={`/blogs/${blog._id}`}>Read More</Link>
                <div>
                  <FacebookShareButton
                    url={`http://localhost:3000/blogs/${blog._id}`}
                  >
                    <FacebookIcon round="true" size="30" />
                  </FacebookShareButton>
                  <TwitterShareButton url={''}>
                    <TwitterIcon round="true" size="30" />
                  </TwitterShareButton>
                  <WhatsappShareButton url={''}>
                    <WhatsappIcon round="true" size="30" />
                  </WhatsappShareButton>
                  <FacebookMessengerShareButton url={''}>
                    <FacebookMessengerIcon round="true" size="30" />
                  </FacebookMessengerShareButton>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default BlogCard;
