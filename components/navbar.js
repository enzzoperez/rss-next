import React from 'react';
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
<<<<<<< Updated upstream
        <Navbar md="3" light>
=======
        <Navbar className="mb-3" light>
>>>>>>> Stashed changes
          <Row>
            <Col sm="10">
              <NavbarBrand href="/index" className="mr-auto">
                <img src="/static/logo-next2.png" width="30%"/>
              </NavbarBrand>
            </Col>
            <Col md="1">
              <NavbarToggler onClick={this.toggleNavbar} className="mr-4" />
            </Col>
          </Row>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/index">Ultimas Noticias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/listPapers">Listas de Diarios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/category">Categorías</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/quiniela">Quiniela</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Clima</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutPage">Sobre Nosotros</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <style jsx>{`
          body { 
            background: #000;
            font: 11px menlo;
            color: #fff;
          }
        `}</style>
      </div>
    );
  }
}