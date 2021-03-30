import React, { useState, useEffect, useRef } from 'react';
import MarkDownEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBlog } from '../actions/blogActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { BLOG_CREATE_RESET } from '../constants/blogContants';
import { Col } from 'react-bootstrap';

const CreateBlogScreen = ({ history }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const createBlog = useSelector((state) => state.createBlog);
  const { loading, error, success } = createBlog;
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [postThumbnail, setPostThumbnail] = useState('');

  const showInline = (toolbar, context) => {};

  const createPostHandler = (e) => {
    e.preventDefault();
    dispatch(
      createNewBlog(postTitle, postDescription, markdown, postThumbnail)
    );

    setPostTitle('');
    setPostDescription('');
    setPostThumbnail('');
    setMarkdown('');
  };

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push('/login');
    }
  }, [history, dispatch, userInfo]);

  return (
    <React.Fragment>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {success && (
        <Message variant="success">post created success fully</Message>
      )}

      <form onSubmit={createPostHandler}>
        <Col>
          <input
            type="text"
            placeholder="title"
            value={postTitle}
            onChange={(value) => {
              setPostTitle(value.target.value);
            }}
          />
          <input
            type="text"
            placeholder="descritpion"
            value={postDescription}
            onChange={(value) => {
              setPostDescription(value.target.value);
            }}
          />
          <input
            type="text"
            placeholder="image"
            value={postThumbnail}
            onChange={(value) => {
              setPostThumbnail(value.target.value);
            }}
          />

          {/* <SunEditor
            showToolbar={true}
            lang="en"
            enableToolbar={true}
            fontSize={[10, 12]}
            ref={editorRef}
            onChange={(value) => {
              console.log(value);
              setMarkdown(value);
            }}
          /> */}

          {/* <MarkDownEditor
            placeholder="markdown"
            value={markdown}
            onChange={(value) => {
              setMarkdown(value);
            }}
            tabSize={20}
          /> */}
          <button type="submit">submit</button>
        </Col>
      </form>
    </React.Fragment>
  );
};

export default CreateBlogScreen;
