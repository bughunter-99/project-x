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

const VideoCard = ({ video }) => {
  const youtube_parser = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };
  const title = video.title.split(' ');
  return (
    <React.Fragment>
      <Card className="my-3" border="secondary">
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img
              variant="top"
              src={`https://img.youtube.com/vi/${youtube_parser(
                video.videoUrl
              )}/0.jpg`}
            />
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
              <Card.Text>{video.description}</Card.Text>
              <Card.Text className="text-muted">
                uploaded on: {new Date(video.createdAt).toDateString()}
              </Card.Text>
              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Link to={`/videos/${video._id}`}>
                  <h4>Play</h4>
                </Link>

                <div>
                  <FacebookShareButton url={video.videoUrl}>
                    <FacebookIcon round="true" size="30" />
                  </FacebookShareButton>
                  <TwitterShareButton url={video.videoUrl}>
                    <TwitterIcon round="true" size="30" />
                  </TwitterShareButton>
                  <WhatsappShareButton url={video.videoUrl}>
                    <WhatsappIcon round="true" size="30" />
                  </WhatsappShareButton>
                  <FacebookMessengerShareButton url={video.videoUrl}>
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

export default VideoCard;
