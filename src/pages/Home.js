import React, { Component } from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import './Home.scss';
import LogInButton from '../components/LogInButton';
import GenerateWallet from '../components/GenerateWallet';
class Home extends Component {
  render() {
    return (
      <div>
        <Container></Container>
        <hr></hr>
        <Container>
          <GenerateWallet />
        </Container>
        <Container className="last-container">
          <LogInButton />
        </Container>
        <hr></hr>
        <Container></Container>
      </div>
    );
  }
}
export default Home;
