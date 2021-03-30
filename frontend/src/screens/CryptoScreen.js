import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Form, FormControl, Row, Table } from 'react-bootstrap';
import { getCryptoCurrency } from '../actions/cryptoActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CryptoScreen = () => {
  const dispatch = useDispatch();
  const cryptoCurrency = useSelector((state) => state.cryptoCurrency);
  const { loading, error, cryptoList } = cryptoCurrency;
  const [cryptoQuery, setCryptoQuery] = useState('');

  useEffect(() => {
    dispatch(getCryptoCurrency());
  }, [dispatch]);

  const filteredCryptoList = cryptoList.filter((coin) =>
    coin.name.toLowerCase().includes(cryptoQuery.toLowerCase())
  );

  return (
    <React.Fragment>
      <h3 style={{ textAlign: 'center' }} className="my-5">
        CryptoCurrency
      </h3>
      <FormContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId="cryptoSearch">
            <FormControl
              type="text"
              placeholder="Search.."
              onChange={(e) => {
                setCryptoQuery(e.target.value);
              }}
            ></FormControl>
          </Form.Group>
        </Form>
      </FormContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24H</th>
              <th>24H Vol</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptoList.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td width={{ width: '50px' }}>
                  <Col md={10}>
                    <Row style={{ justifyContent: 'space-between' }}>
                      {' '}
                      <img
                        src={coin.image}
                        style={{
                          width: '25px',
                          height: '25px',
                        }}
                        alt={coin.name}
                      />
                      <p>{coin.name}</p>
                      <p style={{ fontSize: '12px' }}>
                        {coin.symbol.toUpperCase()}
                      </p>
                    </Row>
                  </Col>
                </td>
                <td> &#8377;{coin.current_price.toLocaleString()}</td>
                <td>
                  {coin.price_change_percentage_24h < 0 ? (
                    <p style={{ color: 'red' }}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  ) : (
                    <p style={{ color: 'green' }}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  )}
                </td>
                <td> &#8377;{coin.total_volume.toLocaleString()}</td>
                <td> &#8377;{coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default CryptoScreen;
