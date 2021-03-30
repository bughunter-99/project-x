import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoDetails } from '../actions/videoActions';
import ReactPlayer from 'react-player/lazy';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Col, Row } from 'react-bootstrap';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const VideoScreen = ({ match }) => {
  const dispatch = useDispatch();
  const videoDetails = useSelector((state) => state.videoDetails);
  const { loading, error, video } = videoDetails;

  useEffect(() => {
    dispatch(getVideoDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          <Col>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2>{video.title}</h2>
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
            <p className="text-muted">
              - {new Date(video.createdAt).toDateString()}
            </p>
            <div className="video-container my-4">
              <ReactPlayer
                width="100%"
                height="100%"
                url={video.videoUrl}
                controls
              />
            </div>
            <h5>{video.description}</h5>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default VideoScreen;
