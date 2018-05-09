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
            <Col md="5" className="mb-5">
              <div className="mb-5 flex-center">
                <a className="fb-ic" href="www.facebook.com/nextinnovationlab">
                  <FaFacebook/>
                </a>
                <a class="tw-ic">
                  <FaTwitter/>
                </a>
                <a class="gplus-ic">
                    <FaGoogle/>
                </a>
                <a class="li-ic">
                    <FaLinkedin/>
                </a>
                <a className="ins-ic">
                    <FaInstagram/>
                </a>
              </div>
            </Col>
          </Row>

          <div class="footer-copyright py-3 text-center">
              © 2018 Copyright:
              <a href=""> Next Innovation Lab </a>
          </div>
        </Container>
    </footer>
                      
    )
  }
};