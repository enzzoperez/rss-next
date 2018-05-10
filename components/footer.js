import React, { Component } from 'react';
import FaIconPack from 'react-icons/lib/fa';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';

import { Container, Row, Col } from 'reactstrap';


export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small indigo pt-0">
        <Container>
          <Row>
            <Col sm={{ size: 'auto', offset: 3 }} md={{ size: 'auto', offset: 3 }} className="mb-1 mt-5 text-white">
              <div className="mb-5 flex-center">
                <h3 class="text-white" href="https://www.facebook.com/nextinnovationlab/"> 
                  Next Innovation Lab <img src="/static/logo-next.png" width="5%"/></h3>
                  
              </div>
            </Col>
          </Row>

          <div class="footer-copyright pb-3 text-center text-white">
              © 2018 Copyright
          </div>
        </Container>
        <style jsx>{`
          .indigo { 
            background: #30302f;
            font-family: Roboto;
          }
        `}</style>
    </footer>
                      
    )
  }
};