import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <React.Fragment>
      <FormContainer>
        <h1 className="mt-5 mb-3">Register</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>
              Name<span style={{ color: 'red' }}>*</span>{' '}
            </Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setMessage(null);
              }}
            ></Form.Control>
          </Form.Group>
          <div className="pt-1"></div>
          <Form.Group controlId="email">
            <Form.Label>
              Email<span style={{ color: 'red' }}>*</span>{' '}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage(null);
              }}
            ></Form.Control>
          </Form.Group>
          <div className="pt-1"></div>
          <Form.Group controlId="password">
            <Form.Label>
              Password<span style={{ color: 'red' }}>*</span>{' '}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setMessage(null);
              }}
            ></Form.Control>
          </Form.Group>
          <div className="pt-1"></div>
          <Form.Group controlId="confirmPassword">
            <Form.Label>
              Confirm Password<span style={{ color: 'red' }}>*</span>{' '}
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setMessage(null);
              }}
            ></Form.Control>
          </Form.Group>
          <div className="pt-1"></div>
          <Button type="submit" variant="outline-primary">
            Register
          </Button>
        </Form>
        <div className="pt-1"></div>
        <Row className="py-3">
          <Col>
            Have an Account ?
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </React.Fragment>
  );
};

export default RegisterScreen;
