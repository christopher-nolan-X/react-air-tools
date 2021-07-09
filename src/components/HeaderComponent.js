import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar sticky="top" expand="md">
          <div className="container-fluid">
            <NavbarBrand className="mr-auto" href="/home">Air Tools</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav navbar>
                <NavItem>
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