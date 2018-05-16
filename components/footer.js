import React, { Component } from 'react';
import FaIconPack from 'react-icons/lib/fa';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';

import { Container, Row, Col } from 'reactstrap';


export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small indigo">
        <Container>
          <Row>
            <Col xs={{ size: 'auto', offset: 4 }} sm={{ size: 'auto', offset: 4 }} md={{ size: 'auto', offset: 4 }} className="text-white">
              <div className="ml-4 flex-center">
                <h5 className="text-white ml-4" href="https://www.facebook.com/nextinnovationlab/"> 
                  Next Innovation Lab  
                  <img src="/static/logo-next.png" width="5%"/>
                  © 2018 Copyright
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .indigo { 
            background: #30302f;
            font-family: Roboto;
            height: 60px;
          }
        `}</style>
    </footer>
                      
    )
  }
};