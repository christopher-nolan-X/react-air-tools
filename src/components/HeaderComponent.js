import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar sticky="top" expand="md">
          <div className="container-fluid">
            <NavbarBrand className="mr-auto my-auto" tag="h1" href="/home">Air Tools</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <Collapse navbar>
              <Nav className="container-fluid" navbar>
                <NavItem className="ml-auto">
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/climate">
                    <i className="fa fa-list fa-lg" /> Climate Data
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/ductsizer">
                    <i className="fa fa-info fa-lg" /> Duct Sizer
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/staticpressure">
                    <i className="fa fa-address-card fa-lg" /> Static Pressure Calculator
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/workload">
                    <i className="fa fa-address-card fa-lg" /> Workload
                  </NavLink>
                </NavItem>
              </Nav>

              <span className="navbar-text ml-auto">
                <Button outline>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>

            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;