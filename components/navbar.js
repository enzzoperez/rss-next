import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
        <Navbar color="warning" light>
          <NavbarBrand href="/index" className="mr-auto">
            <img src="/static/logo-next2.png" width="30%"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Ultimas Noticias</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/listPapers">Listas de Diarios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutPage">Categorías</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutPage">Clima</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutPage">Sobre Nosotros</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}