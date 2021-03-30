import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ news }) => {
  return (
    <a
      style={{ textDecoration: 'none', color: 'inherit' }}
      href={`${news.url}`}
      target="_blank"
      rel="noreferrer"
    >
      <Card
        style={{ height: '500px' }}
        className="mt-2 mb-2"
        border="secondary"
      >
        <Card.Img
          style={{
            objectFit: 'cover',

            width: '100%',
            height: '30vh',
          }}
          variant="top"
          src={
            news.urlToImage
              ? news.urlToImage
              : 'https://jcpatriot.com/wp-content/uploads/2013/09/Insider-ONLINE-610x406.jpg'
          }
        />
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <small className="text-muted">
              {new Date(news.publishedAt).toDateString()}
            </small>
            <small className="text-muted">{news.source.name}</small>
          </div>
        </Card.Footer>
      </Card>
    </a>
  );
};

export default NewsCard;
