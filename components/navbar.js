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
        <Navbar color="faded" light>
          <Row className='raw'>
            <Col xs="10" sm="10" md='10'>
              <NavbarBrand href="/index" className="mr-auto">
                <img src="/static/logo-next2.png" width="30%"/>
              </NavbarBrand>
            </Col>
            <Col className="menu" xs="1" sm="1" md={{ size: 1, offset: 1 }} >
              <NavbarToggler onClick={this.toggleNavbar} />
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

        {/* <Navbar md="3" light>
>>>>>>> 782137a0c8f8f3097512d41e74773357225529f7
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
        </Navbar> */}

        <style jsx global>{`
          body { 
            background: #000;
            font: 11px menlo;
            color: #fff;
          }
          .raw{
            width: 100%;
          }
          .menu{
            text-align: end;
            padding-right: 0 !important;
          }
        `}</style>
      </div>
    );
  }
}