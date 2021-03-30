import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import VideoCard from '../components/VideoCard';
import { getVideoList } from '../actions/videoActions';
import { Col, Row } from 'react-bootstrap';

const VideoListScreen = () => {
  const dispatch = useDispatch();
  const videoPost = useSelector((state) => state.videoPost);
  const { loading, error, videoList } = videoPost;

  useEffect(() => {
    dispatch(getVideoList());
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        videoList.map((video) => (
          <Row key={video._id}>
            <Col>
              <VideoCard video={video} />
            </Col>
          </Row>
        ))
      )}
    </React.Fragment>
  );
};

export default VideoListScreen;
