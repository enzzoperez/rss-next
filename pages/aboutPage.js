import React, { Component } from 'react';
import Layout from "../components/layout";
import { Row, Col, Jumbotron, Button } from 'reactstrap';

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron>
          <Row>
            <Col sm={{ size: 'auto', offset: 4 }} md={{ size: 'auto', offset: 3 }} className="justify-content-center">
              <img src="/static/logo-next.png" width="30%"/>
            </Col>
          </Row>
          <Row>
            <Col md="11">
              <h3 className="display-3">Hola, somos Next Innovation Lab!</h3>
            </Col>
            <Col md="11">
              <p className="lead">Somos una Agencia y laboratorio de Innovación, 
                brindamos asesoramiento a las organizaciónes utilizando metodologías 
                como Design Thinking, Lean y Agile para generar nuevas soluciones, 
                experiencias, productos y servicios para propulsar tu organización..</p>
                <p className="lead">Ahora, añadimos la rama de Desarrollo de Aplicaciones Móviles,
                 Híbridas, Progressive Web Apps, Sistemas.</p>
            </Col>
            <hr className="my-2" />
            <Col md="11 text-center mt-5">
              <p>Podes contactarnos en redes sociales!</p>
            </Col>
            <p className="lead">
            <Col sm={{ size: 'auto', offset: 11 }} md={{ size: 'auto', offset: 11 }}>
              <Button href="https://www.facebook.com/nextinnovationlab/" color="primary">Ir a Facebook de Next</Button>
            </Col>
          </p>
          </Row>
        </Jumbotron>
      </Layout>
    )
  }
};
