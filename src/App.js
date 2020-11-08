import React from 'react'
// import logo from './logo.svg';
import './App.css'
import {Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Nav from './Nav'
import Content from './Content'


function App() {
  return (
    <Container fluid>
      <Row>  
        <Col xs={12}>
          <div className='header'><Header/></div>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={2}>
          <div className='nav'><Nav/></div>
        </Col>
        <Col xs={10}>
          <div className='content'><Content/></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
