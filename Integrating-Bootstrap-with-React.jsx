import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  

const HomePage = () => {
  return (
    <Container className="p-5" style={{ backgroundColor: '#f8f9fa', color: '#343a40' }}>
      <h1 className="text-center">Welcome to Our Shop</h1>
      <p className="text-center">Browse our collection of exclusive products and enjoy your shopping experience.</p>

      <Image 
        src={process.env.PUBLIC_URL + '/assets/welcome-image.jpg'} 
        alt="Welcome" 
        fluid 
        className="mb-4 mx-auto d-block"
      />

      <div className="text-center">
        <Button variant="primary" size="lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          Shop Now
        </Button>
      </div>

      <Card className="mt-5 shadow-sm">
        <Card.Body>
          <Card.Title>Featured Products</Card.Title>
          <Card.Text>
            Discover our range of best-selling products, hand-picked just for you.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};


import React from 'react';
import { Container, Row, Col, Image, Button, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
const NotFound = () => {
  return (
    <Container className="text-center p-5" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Image 
            src={process.env.PUBLIC_URL + '/assets/not-found.png'} 
            alt="404 Not Found" 
            fluid 
            className="mb-4"
          />
          <h2>Oops! Page Not Found</h2>
          <p>It looks like the page you're looking for doesn't exist.</p>
          <Button variant="primary" as={NavLink} href="/">
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};