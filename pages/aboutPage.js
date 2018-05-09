import React, { Component } from 'react';
import Layout from "../components/layout";
import { Jumbotron, Button } from 'reactstrap';

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron>
          <h1 className="display-3">Hello, somos Next!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Ver más!</Button>
          </p>
        </Jumbotron>
      </Layout>
    )
  }
};
